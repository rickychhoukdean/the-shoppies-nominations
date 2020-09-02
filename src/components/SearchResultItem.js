import React from "react";

function SearchResultItem({ movie, nominate }) {
  return (
    <div>
      {movie.Title}
      {movie.Year}
      <button onClick={() => nominate(movie)}>Nominate</button>
    </div>
  );
}

export default SearchResultItem;
