import React from "react";

function SearchResultItem({ movie, nominate, picked }) {
  return (
    <div>
      {movie.Title}
      {movie.Year}
      <button disabled={picked} onClick={() => nominate(movie)}>
        Nominate
      </button>
    </div>
  );
}

export default SearchResultItem;
