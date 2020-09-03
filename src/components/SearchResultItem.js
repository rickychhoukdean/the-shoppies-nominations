import React from "react";

function SearchResultItem({ movie, nominate, picked }) {
  return (
    <div className="result__item">
      {movie.Title} ({movie.Year})
      <button
        className="result__button"
        disabled={picked}
        onClick={() => nominate(movie)}
      >
        Nominate
      </button>
    </div>
  );
}

export default SearchResultItem;
