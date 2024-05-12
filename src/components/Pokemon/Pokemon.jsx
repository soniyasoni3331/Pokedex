import React from 'react'
import './Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon({name, url, id}) {
  return (
       <Link to={`/pokemon/${id}`} className='pokemonWrapper'>
        <div className='pokemon'>
            <div className='pokemonName'>{name}</div>
            <img className='pokemonImage' src={url}/>
         </div>
        </Link>
  )
}

export default Pokemon