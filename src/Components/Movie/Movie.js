import React from 'react'
import { useLocation } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import './styles.scss'

const Movie = () => {

  const location = useLocation()
  const movie  = location.state

  const rating = (movie.imdb_rating/10)* 5
  const year = movie.released_on.split('-')[0]
  const director = Array.isArray(movie.director)?movie.director.join(', '):movie.director
  const cast = movie.cast.join(', ')

  return (
    <div className='movie'>
      <div className='movie__card'>
        <div className='movie__poster'>
          <img  src={movie.poster}/>
        </div>
        <div className='movie__details' >
          <div className='movie__details_header'>
            <div className='movie__details_header_p1'>
              <p>{movie.title}<span className='rating'>({movie.imdb_rating})</span></p>
              <p className='stars'>
                <Rating name='half-rating-read' 
                  defaultValue={rating}
                  precision={0.5} 
                  readOnly
                />
              </p>
            </div>
            <div className='movie__details_header_p2'>
              {year} | {movie.length} | {director}
              <p className='cast'>cast: {cast}</p>
            </div>
          </div>
          <div>
            <p>Movie Description: {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie