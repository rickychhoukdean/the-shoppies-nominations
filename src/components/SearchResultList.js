import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResultList({
  results,
  nominate,
  nominations,
  removeNomination,
}) {
  let res = results.map((result, id) => {
    let picked = false;

    //This part may be slightly inefficient since there is no ELSE but since there is only 5 nominations in the foreach it isnt too ba
    if (nominations.length === 5) {
      picked = true;
    }
    nominations.forEach((nominated) => {
      if (nominated.imdbID === result.imdbID) {
        picked = "nominated";
      }
    });

    return (
      <SearchResultItem
        key={id}
        picked={picked}
        movie={result}
        nominate={nominate}
        removeNomination={removeNomination}
      ></SearchResultItem>
    );
  });

  return <div className="results">{res}</div>;
}

export default SearchResultList;
