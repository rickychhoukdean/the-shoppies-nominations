import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import SearchResultList from "./components/SearchResultList";
import NominationList from "./components/NominationList";
import Banner from "./components/Banner";
import { fetchList } from "./api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [bannerStatus, setBannerStatus] = useState(false);

  const changeSearchValue = async (searchResult) => {
    setSearch(searchResult);
    const movieList = await fetchList(search);
    setSearchResults(movieList);
  };

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
    nominations.length >= 5 ? setBannerStatus(true) : setBannerStatus(false);
  }, [nominations]);

  return (
    <div className="container" data-test="component-app">
      <h1>The Shoppies</h1>
      <SearchBar changeSearchValue={changeSearchValue}></SearchBar>
      <SearchResultList
        results={searchResults}
        nominate={nominateMovie}
        nominations={nominations}
      />
      <NominationList
        nominations={nominations}
        removeNomination={removeNomation}
      />

      {bannerStatus && <Banner />}
    </div>
  );
}

export default App;
