import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import NominationList from "./components/NominationList";
import { fetchList } from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const changeSearchValue = async (searchResult) => {
    setSearch(searchResult);
    const movieList = await fetchList(search);
    setSearchResults(movieList);
  };

  //TODO - ADD USE EFFECT FOR MOVIE LIST

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie]);
  };

  const removeNomation = (imdbID) => {
    const filteredNominations = nominations.filter((nomination) => {
      return nomination.imdbID !== imdbID;
    });
    setNominations(filteredNominations);
  };

  useEffect(() => {
    if (nominations.length === 5) {
    }
  }, [nominations]);

  return (
    <div className="container" data-test="component-app">
      <h1>The Shoppies</h1>
      <SearchBar changeSearchValue={changeSearchValue}></SearchBar>
      <SearchResultList
        results={searchResults}
        nominate={nominateMovie}
        nominations={nominations}
        removeNomination={removeNomation}
      />
      <NominationList
        nominations={nominations}
        removeNomination={removeNomation}
      />
    </div>
  );
}

export default App;
