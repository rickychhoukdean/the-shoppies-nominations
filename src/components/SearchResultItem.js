import React from "react";

function SearchResultItem({ title, year, nominate }) {
  return (
    <div>
      {title}
      {year}
      <button onClick={(event) => nominate(`${title} - ${year}`)}>
        Nominate
      </button>
    </div>
  );
}

export default SearchResultItem;
