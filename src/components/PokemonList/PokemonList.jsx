//CSS imports
import './PokemonList.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon.jsx';

function PokemonList() {
    const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexUrl, setPokedexUrl] = useState(defaultUrl);
    const [nextUrl, setNextUrl] = useState(defaultUrl)
    const [prevUrl, setPrevUrl] = useState(defaultUrl)

    async function downloadPokemon() {
        const response = await axios.get(pokedexUrl ? pokedexUrl : defaultUrl);
        const pokemonResults = response.data.results; //array of pokemons
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url))
        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData =>{
            const pokemon = pokemonData.data;
            return{
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon.sprites.other.dream_world.front_default,
              types: pokemon.types
            }
        });
        setPokemonList(pokemonFinalList)
    }

    useEffect(()=>{
        downloadPokemon();
    },[pokedexUrl])

  return (
    <>
      <div className='pokemonListWrapper'>
          <div className='pokemonListHeading'>Pokemon List</div>
          <div className='pageControls'>
            <button onClick={()=>{setPokedexUrl(prevUrl)}}>Prev</button>
            <button onClick={()=>{setPokedexUrl(nextUrl)}}>Next</button>
          </div>
          <div className='pokemonList'>{pokemonList.map(pokemon =><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}</div>
      </div>
    </>

  )
}

export default PokemonList