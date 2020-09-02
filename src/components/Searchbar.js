import React from "react";

function SearchBar({ changeSearchValue }) {
  return (
    <div data-test="component-searchbar">
      <form>
        <label>
          Movie Title:
          <input
            type="text"
            name="movie"
            onChange={(event) => changeSearchValue(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
