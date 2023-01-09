import React from 'react'
import { useLocation } from 'react-router-dom'
import {GetMovie} from '../../data/getMovie/getMovie.js'

const SearchResults = () => {
  
  const query = useLocation().state
  const results = GetMovie(query)
  console.log(results)

  return (
    <div>
      Search results

    </div>
  )
}

export default SearchResults