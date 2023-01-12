import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import './styles.scss'

const Header = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const searchMovie = (event) => {

        if(event.key === "Enter"){
            if(input.length> 0){
                navigate(`/search/${input}`, {state: input})
            }
        }
    }
  return (
    <div className='header'>
        <div className='header--container'>
            <h1><Link to='/' className='header--name'>Wookie Movies</Link></h1>
            <Link to='/bookmarks' className='header--bookmark-collection'><BookmarksIcon /></Link>
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