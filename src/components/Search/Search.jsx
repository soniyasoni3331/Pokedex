//CSS imports
import './Search.css'
import React from 'react'

function Search({updateSearchTerm}) {
  return (
    <>
    <input 
    id='searchPokemonBar'
    type='text' 
    placeholder='Search for your Pokemon here!'
    onChange={(e)=>{updateSearchTerm(e.target.value)}}
    >
    </input>
    </>
  )
}

export default Search