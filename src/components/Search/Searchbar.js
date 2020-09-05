import React from "react";
import "./Searchbar.scss";

function SearchBar({ changeSearchValue }) {
  return (
    <form className="search-form">
      <label htmlFor="movie" className="search-form__label">
        Movie Title
      </label>
      <i className="search-form__icon fa fa-search"></i>
        <input
          placeholder="Search OMDb"
          className="search-form__input"
          type="text"
          id="movie"
          name="movie"
          onChange={(event) => changeSearchValue(event.target.value)}
        />
    </form>
  );
}

export default SearchBar;


