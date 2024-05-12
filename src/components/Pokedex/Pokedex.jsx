//import CSS 
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import React, { useState } from 'react'

function Pokedex() {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    <div className='pokedexWrapper'>
    <h1>POKEDEX</h1>
    <Search  updateSearchTerm={setSearchTerm}/>
    {searchTerm? <div>{searchTerm}</div>:<PokemonList/>}
    </div>
    </>
    )
}

export default Pokedex