import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults'

const Header = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const searchMovie = (event) => {
        if(event.key === "Enter"){
            navigate(`/search/${event.target.value}`)
        }
    }
  return (
    <div className='header'>
        <h1>Wookie Movies</h1>
        <input type="text" 
            onChange={event => setInput(event.target.value)}
            onKeyDown={searchMovie}
        />
    </div>
  )
}

export default Header