import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults'

const Header = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const searchMovie = (event) => {
        if(event.key === "Enter"){
            navigate(`/search/${event.target.value}`)
            // console.log('yes')
            // <Navigate to={'/search/' + event.target.value}/>
            // return (<NavLink to={'/search/'+ event.target.value}>
            //     <SearchResults />
            // </NavLink>)
            // console.log(input)
        }
    }
  return (
    <div>
        Header
        <input type="text" 
            onChange={event => setInput(event.target.value)}
            onKeyDown={searchMovie}
        />
    </div>
  )
}

export default Header