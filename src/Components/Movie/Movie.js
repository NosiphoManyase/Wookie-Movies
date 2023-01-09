import React from 'react'
import { useLocation } from 'react-router-dom'

const Movie = () => {

  const location = useLocation()
  const movie  = location.state
  console.log(movie)

  const year = movie.released_on.split('-')[0]
  const director = Array.isArray(movie.director)?movie.director.join(', '):movie.director
  const cast = movie.cast.join(', ')

  return (
    <div style={{display:'flex'}}>
      <div>
        <img  src={movie.poster} style={{width: '300px'}}/>
      </div>
      <div>
        <div style={{display:'flex'}}>
          <p>{movie.title}<span>({movie.imdb_rating})</span></p>
          <p>star rating</p>
        </div>
        <div>
          {year} | {movie.length} | {director}
          <p>cast: {cast}</p>
        </div>
        <div>
          <p>Movie Description: {movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie