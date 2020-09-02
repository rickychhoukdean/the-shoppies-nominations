import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import { fetchList } from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const changeSearchValue = (searchResult) => {
    setSearch(searchResult);
  };

  const submitSearch = async (event) => {
    event.preventDefault();
    const movieList = await fetchList(search);
    setSearchResults(movieList);
  };

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie]);
  };

  return (
    <div className="container" data-test="component-app">
      <h1>The Shoppies</h1>
      <SearchBar
        changeSearchValue={changeSearchValue}
        submitSearch={submitSearch}
      ></SearchBar>

      <SearchResultList results={searchResults} nominate={nominateMovie} />
    </div>
  );
}

export default App;
