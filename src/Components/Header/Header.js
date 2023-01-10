import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'

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
        <div className='header--container'>
            <h1><Link to='/' className='header--name'>Wookie Movies</Link></h1>
            <input type="text" 
                onChange={event => setInput(event.target.value)}
                onKeyDown={searchMovie}
                className='header--search-bar'
            />
        </div>
    </div>
  )
}

export default Header