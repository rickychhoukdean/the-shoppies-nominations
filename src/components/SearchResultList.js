import React from "react";

function SearchResultList({ results }) {
  let res = results.map((result, id) => {
    return (
      <div key={id}>
        {result.Title}
        {result.Year}
        <button>Test</button>
      </div>
    );
  });

  return <div>{res}</div>;
}

export default SearchResultList;
