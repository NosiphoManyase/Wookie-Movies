import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const searchMovie = (event) => {

        if(event.key === "Enter"){
            navigate(`/search/${input}`, {state: input})
        }
    }
  return (
    <div className='header'>
        <h1><Link to='/'>Wookie Movies</Link></h1>
        <input type="text" 
            onChange={event => setInput(event.target.value)}
            onKeyDown={searchMovie}
        />
    </div>
  )
}

export default Header