import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResultList({ results, nominate }) {
  let res = results.map((result, id) => {
    return (
      <SearchResultItem
        key={id}
        title={result.Title}
        year={result.Year}
        nominate={nominate}
      ></SearchResultItem>
    );
  });

  return <>{res}</>;
}

export default SearchResultList;
