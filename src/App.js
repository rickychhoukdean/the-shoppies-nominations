import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchBar from "./components/Search/Searchbar";
import SearchResultList from "./components/Search/SearchResults/SearchResultList";
import NominationListHolder from "./components/Nominations/NominationListHolder";
import "./App.css";
import { fetchList } from "./api";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [localStorage, setLocalStorage] = useLocalStorage("nominations", []);
  const [nominations, setNominations] = useState(localStorage);
  const [bannerStatus, setBannerStatus] = useState(false);

  const changeSearchValue = (searchResult) => {
    setSearch(searchResult);
  };

  const addNomination = (movie) => {
    const movieObj = { id: movie.imdbID, movie };
    setNominations([...nominations, movieObj]);
  };

  const removeNomation = (imdbID) => {
    const filteredNominations = nominations.filter((nomination) => {
      return nomination.movie.imdbID !== imdbID;
    });
    setNominations(filteredNominations);
  };

  const changeNominationOrder = (nomination) => {
    setLocalStorage(nomination);
  };

  useEffect(() => {
    async function searchOMDB() {
      const movieList = await fetchList(search);
      setSearchResults(movieList);
    }
    searchOMDB();
  }, [search]);

  useEffect(() => {
    nominations.length >= 5 ? setBannerStatus(true) : setBannerStatus(false);
  }, [nominations]);

  return (
    <>
      <Header text={"Shoppies"} />
      <main className="container parent" data-test="component-app">
        <div className="div1">
          <SearchBar changeSearchValue={changeSearchValue} />
        </div>
        <div className="div2">
          <SearchResultList
            searchTerms={search}
            results={searchResults}
            nominate={addNomination}
            nominations={nominations}
          />
        </div>
        <div className="div3">
          <NominationListHolder
            nominations={nominations}
            removeNomination={removeNomation}
            changeNominationOrder={changeNominationOrder}
          />
        </div>

        {bannerStatus && (
          <Banner text={"Thank you for nominating five movies!"} />
        )}
      </main>
    </>
  );
}

export default App;
