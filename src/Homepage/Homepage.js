import React from "react";
import AllMovies from "../Components/Movies/DisplayMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Movie from "../Components/Movie/Movie";
import SearchResults from "../Components/SearchResults/SearchResults";
import BookmarkedMovies from "../Components/BookmarksPage/DisplayBookMarks";

const Homepage = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<AllMovies movies={props.data.movies} />}
          />
          <Route path="/:slug" element={<Movie />} />
          <Route path="/search/:slug" element={<SearchResults />} />
          <Route path="/bookmarks" element={<BookmarkedMovies />} />
        </Routes>
      </Router>
    </>
  );
};

export default Homepage;
