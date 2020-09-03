import React from "react";

function NominationList({ nominations, removeNomination }) {
  let res = nominations.map((result, id) => {
    return (
      <div key={id}>
        {result.Title}
        {result.Year}
        <button
          onClick={() => {
            removeNomination(result.imdbID);
          }}
        >
          Remove
        </button>
      </div>
    );
  });

  return <div className="nomination">{res}</div>;
}

export default NominationList;
