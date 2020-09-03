import React from "react";

function SearchBar({ changeSearchValue }) {
  return (
    <form className="search-form">
      <label className="search-form__label">
        Movie Title:
        <input
          className="search-form__input"
          type="text"
          name="movie"
          onChange={(event) => changeSearchValue(event.target.value)}
        />
      </label>
    </form>
  );
}

export default SearchBar;
