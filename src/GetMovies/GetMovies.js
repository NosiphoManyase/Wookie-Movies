import React from 'react'
import { useQuery } from 'react-query'

const GetMovies = () => {

    const { isLoading, error, data } = useQuery('MoviesData', () =>
     fetch('https://wookie.codesubmit.io/movies', {
        headers: new Headers ({
            "Authorization": "Bearer Wookie2021"
        })
     })
     .then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
   console.log(data)

  return (
    <div>All Movies</div>
  )
}

export default GetMovies