import React from "react";
import "./App.css";
import SearchBar from "./components/Searchbar"

function App() {
  return (
    <div className="container" data-test="component-app">
      <h1>The Shoppies</h1>
      <SearchBar></SearchBar>

    </div>
  );
}

export default App;
