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
    if (nominations.length >= 5) {
      picked = true;
    } else {
      nominations.forEach((nominated) => {
        if (nominated.imdbID === result.imdbID) {
          picked = true;
        }
      });
    }
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

  return <section className="section-result">{res}</section>;
}

export default SearchResultList;
