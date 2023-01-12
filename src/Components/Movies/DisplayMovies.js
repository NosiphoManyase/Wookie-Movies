import React from "react";
import Movies from "../SortMovies/SortMovies";
import MovieSlider from "../MovieSlider/MovieSlider";
import "./styles.scss";

const DisplayMovies = (props) => {
  const sortedMovies = Movies(props.movies);

  const displayMovies = () => {
    const toDisplay = [];

    for (const [key, value] of Object.entries(sortedMovies)) {
      const movies = MovieSlider(value);
      const genre = (
        <div className="genre" key={`${key}`}>
          <span className="genre--title">{key.toLocaleUpperCase()}</span>
          <div className="movie-slider">{movies}</div>
        </div>
      );
      toDisplay.push(genre);
    }

    return toDisplay;
  };
  return <div className="body-container">{displayMovies()}</div>;
};

export default DisplayMovies;
