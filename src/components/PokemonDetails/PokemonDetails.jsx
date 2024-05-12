import axios from 'axios';
import './PokemonDetails.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function PokemonDetails() {
    const {id} = useParams();
    const pokemonDetailUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const [pokemon, setPokemon] = useState(null);
    async function downloadPokemon(){
        const response = await axios.get(pokemonDetailUrl+id);
        const pokemon = response.data; 
        setPokemon({
            name:pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default
        });
    }

    useEffect(()=>{
        downloadPokemon();
    },[])

  return (
    <>
    <h1 className='pokedexHomePage'>
        <Link to='/'>
        Pokedex
        </Link>
    </h1>
    {pokemon && 
    <div className='pokemonDetailsWrapper'>
    <div className='pokemonDetails'>
       <div className='pokemonDetailName'>{pokemon.name}</div>
       <div className='pokemonImage'>
        <img src={pokemon.image}/>
       </div>
       <div className='pokemonAttr'>
        <div>
        height:{pokemon.height}
        </div>
        <div>
        weight:{pokemon.weight}
        </div>
       </div>
       <div className='pokemonType'>
        <h1>Type: </h1> {pokemon.types.map(t=><span className='type' key={t.type.name}>{t.type.name}</span>)}
       </div>
       </div>
    </div>}
    </>
  )
}

export default PokemonDetails;