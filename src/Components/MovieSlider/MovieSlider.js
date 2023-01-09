import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom';
import "@splidejs/react-splide/css";

const MovieSlider = (moviesInGenre) => {

    const splideOptions = {
        perPage: 5,
        perMove: 1,
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };

    const displayCards = () => {
        const cards = moviesInGenre.map(movie => (
            <SplideSlide>
                <Link to={`/${movie.slug}`} state={movie}>
                  <img src={movie.poster} alt={`${movie.title} card`} style={{width:'200px', }} />
                </Link>   
            </SplideSlide>
        ))
        
        return cards
    }

  return (
    <>
      <Splide options={splideOptions} style={{display:'flex', }}>
        {displayCards()}
      </Splide>
    </>
  )
}

export default MovieSlider