import React from 'react'
import AllMovies from '../Components/AllMovies/AllMovies'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../Components/Header/Header'

const Homepage = (props) => {

  console.log(props.data)

  return (
    <>
      <Header />
      <AllMovies movies={props.data.movies}/>
    </>
  )
}

export default Homepage