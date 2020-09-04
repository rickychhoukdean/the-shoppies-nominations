import React from "react";
import "./SearchResultItem.scss";

function SearchResultItem({ movie, nominate, picked }) {
  return (
    <div className="result__item">
      <div className="result__text">
        {movie.Title} ({movie.Year})
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
