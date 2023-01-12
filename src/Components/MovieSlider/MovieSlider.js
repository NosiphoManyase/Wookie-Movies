import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import "./styles.scss";

const MovieSlider = (moviesInGenre) => {
  const splideOptions = {
    perPage: 5,
    perMove: 1,
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1400: { perPage: 4 },
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  const displayCards = () => {
    const cards = moviesInGenre.map((movie) => (
      <SplideSlide key={`slide/${movie.id}`}>
        <Link to={`/${movie.slug}`} state={movie} style={{ margin: "0 auto" }}>
          <img src={movie.poster} alt={`${movie.title} card`} />
        </Link>
      </SplideSlide>
    ));

    return cards;
  };

  return (
    <>
      <Splide options={splideOptions}>{displayCards()}</Splide>
    </>
  );
};

export default MovieSlider;
