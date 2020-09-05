import React from "react";
import "./SearchResultItem.scss";

function SearchResultItem({ movie, nominate, picked }) {
  return (
    <div
      // style={{ backgroundImage: `url(${movie.Poster})` }}
      className="result__item"
    >
      <div className="result__text">
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {movie.Title}
        </a>
        {" "} ({movie.Year})
        <button
          className="result__button"
          disabled={picked}
          onClick={() => nominate(movie)}
        >
          Nominate
        </button>
      </div>
    </div>
  );
}

export default SearchResultItem;
