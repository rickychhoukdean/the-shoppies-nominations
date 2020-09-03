import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResultList({ results, nominate, nominations }) {
  let res = results.map((result, id) => {
    let picked = false;

    if (nominations.length === 5) {
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
      ></SearchResultItem>
    );
  });

  return <div className="results">{res}</div>;
}

export default SearchResultList;
