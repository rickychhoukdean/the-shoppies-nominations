import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import { fetchList } from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const changeSearchValue = (searchResult) => {
    setSearch(searchResult);
  };

  const submitSearch = async (event) => {
    event.preventDefault();
    const movieList = await fetchList(search);
    console.log(movieList);
    setSearchResults(movieList);
  };

  return (
    <div className="container" data-test="component-app">
      <h1>The Shoppies</h1>
      <SearchBar
        changeSearchValue={changeSearchValue}
        submitSearch={submitSearch}
      ></SearchBar>

      <SearchResultList results={searchResults} />
    </div>
  );
}

export default App;
