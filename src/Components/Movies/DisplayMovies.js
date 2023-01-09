import React from 'react'
import Movies from './SortMovies'
import MovieSlider from '../MovieSlider/MovieSlider'

const DisplayMovies = (props) => {
    
    const sortedMovies = Movies(props.movies)

    const displayMovies = () => {

        const toDisplay = []

        for (const [key, value] of Object.entries(sortedMovies)) {
            
            const movies = MovieSlider(value)
            const genre = <div>{key}<div>{movies}</div></div>
            toDisplay.push(genre)
          }

        return toDisplay
    }
  return (
    <div>
        {displayMovies()}
    </div>
  )
}

export default DisplayMovies