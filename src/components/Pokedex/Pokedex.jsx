//import CSS 
import PokemonList from '../PokemonList/PokemonList';
import './Pokedex.css';
import React from 'react'

function Pokedex() {

  return (
    <>
    <div className='pokedexWrapper'>
    <h1>POKEDEX</h1>
    <PokemonList/>
     </div>
    </>
    )
}

export default Pokedex