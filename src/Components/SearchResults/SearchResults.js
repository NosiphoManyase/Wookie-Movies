import React from "react";
import { useLocation } from "react-router-dom";
import { GetMovie } from "../../data/getMovie/getMovie.js";
import { Link } from "react-router-dom";
import "./styles.scss";

const SearchResults = () => {
  const query = useLocation().state;
  const results = GetMovie(query);
  const result = results.movies;

  const displayResults = () => {
    let movies = [];
    if (result.length > 1) {
      movies = result.map((movie) => {
        return (
          <div className="movie-title" key={`search/${movie.id}`}>
            <Link to={`/${movie.slug}`} state={movie}>
              <img src={movie.poster} />
            </Link>
          </div>
        );
      });
      return movies;
    } else if (result.length === 1) {
      movies = (
        <div className="movie-title">
          <Link to={`/${result[0].slug}`} state={result[0]}>
            <img src={result[0].poster} />
          </Link>
        </div>
      );
    } else {
      movies = (
        <div>
          <h1>No matching movie titles found...</h1>
        </div>
      );
    }

    return movies;
  };

  return (
    <div className="search-body">
      <div className="search-response">{result && displayResults()}</div>
    </div>
  );
};

export default SearchResults;
