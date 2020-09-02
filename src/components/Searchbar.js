import React from "react";

function SearchBar({ changeSearchValue, submitSearch }) {
  //   function submitSearch(event) {
  //     event.preventDefault();

  //     fetch(`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=3a117c14`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovies(data.Search);
  //       });
  //   }

  return (
    <div data-test="component-searchbar">
      <form onSubmit={submitSearch}>
        <label>
          Movie Title:
          <input
            type="text"
            name="movie"
            // value={search}
            onChange={(event) => changeSearchValue(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchBar;
