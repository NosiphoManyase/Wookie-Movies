import React from 'react'

const AllMovies = (props) => {
  return (
    <div>AllMovies
        {props.movies.map(item => (
            <p key={item.id}>{item.title}</p>
        ))}
    </div>
  )
}

export default AllMovies