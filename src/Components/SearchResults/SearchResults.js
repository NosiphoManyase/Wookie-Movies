import React from 'react'
import { useLocation } from 'react-router-dom'
import {GetMovie} from '../../data/getMovie/getMovie.js'

const SearchResults = () => {
  
  
  const query = useLocation().state
  const results = GetMovie(query)
  const result = results.movies
  

  const displayResults = () => {
    
    let movies = []
          if(result.length>1){
        
        movies = result.map(movie => {
          return <div><img src={movie.poster} style={{width:'200px', }} /></div>
        })
        return movies
      }else if(result.length === 1){
       
        movies = <div><img src={result[0].poster} style={{width:'200px', }} /></div>
      }else {
                movies = <p>no movies by that title found</p>
      }

    return movies
  }

  return (
    <div>
      {result && displayResults()}
    </div>
  )
}

export default SearchResults