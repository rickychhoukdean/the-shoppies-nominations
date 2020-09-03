import React from "react";

function SearchResultItem({ movie, nominate, removeNomination, picked }) {
  let button = "";

  if (typeof picked === "boolean") {
    button = (
      <button disabled={picked} onClick={() => nominate(movie)}>
        Nominate
      </button>
    );
  } else {
    button = (
      <button onClick={() => removeNomination(movie.imdbID)}>Unnominate</button>
    );
  }

  return (
    <div>
      {movie.Title}
      {movie.Year}
      {button}
    </div>
  );
}

export default SearchResultItem;
