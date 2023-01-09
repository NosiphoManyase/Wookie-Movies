// import React from 'react'
// import { Link } from 'react-router-dom'

const Movies = (movies) => {

    // get all genres of available movies
    const genresOfMovies = movies.flatMap(item => item.genres)
    const sortedGenres = [...new Set(genresOfMovies)]


    const sortMovies = () => {

      const sortedMovies = sortedGenres.reduce((acc,curr)=> 
        (acc[curr] = [] ,acc)
        ,{}
      )

      movies.forEach(movie => {
        movie.genres.forEach(genre => {
          sortedMovies[genre].push(movie)
        })
      })
      
      return sortedMovies
    }

  return (
    sortMovies()
  )
}

export default Movies