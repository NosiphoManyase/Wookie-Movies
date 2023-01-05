import React from 'react'
import { Link } from 'react-router-dom'

const AllMovies = (props) => {
    const movies = props.movies

  return (
    <div>AllMovies
        {props.movies.map(item => (
            <Link to={'/'+item.id}>
             <p key={item.id}>{item.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default AllMovies