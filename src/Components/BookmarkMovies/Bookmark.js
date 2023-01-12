import React, { useEffect, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

const Bookmark = (movie) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getBookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies"));
  // check in existing bookmarks if currentmovie already bookmerked

  useEffect(() => {
    if (getBookmarks) {
      const isAlreadyBookmarked = getBookmarks.some(
        (bookmarkMovie) => bookmarkMovie.id === movie.movie.id
      );

      if (isAlreadyBookmarked) {
        setIsBookmarked(true);
      }
    }
  }, [isBookmarked]);

  const bookmarkIcon = () => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem("bookmarkedMovies")
    );

    if (existingBookmarks) {
      if (!isBookmarked) {
        existingBookmarks.push(movie.movie);
        localStorage.setItem(
          "bookmarkedMovies",
          JSON.stringify(existingBookmarks)
        );
        setIsBookmarked(true);
      } else {
        const removeBookmark = existingBookmarks.filter(
          (bookmarkMovie) => bookmarkMovie.id != movie.movie.id
        );

        localStorage.setItem(
          "bookmarkedMovies",
          JSON.stringify(removeBookmark)
        );
        setIsBookmarked(false);
      }
    } else {
      localStorage.setItem("bookmarkedMovies", JSON.stringify([movie.movie]));
      setIsBookmarked(true);
    }

    return isBookmarked ? (
      <div className="bookmark">
        <BookmarkOutlinedIcon onClick={() => bookmarkIcon()} />
      </div>
    ) : (
      <div className="bookmark">
        {" "}
        <BookmarkBorderIcon onClick={() => bookmarkIcon()} />
      </div>
    );
  };

  return (
    <>
      {isBookmarked && (
        <div className="bookmark">
          <BookmarkOutlinedIcon onClick={() => bookmarkIcon()} />
        </div>
      )}
      {!isBookmarked && (
        <div className="bookmark">
          {" "}
          <BookmarkBorderIcon onClick={() => bookmarkIcon()} />
        </div>
      )}
    </>
  );
};

export default Bookmark;
