import React from "react";

function NominationListItem({ result, removeNomination }) {
  return (
    <div className="nomation__item">
      {result.Title}
      {result.Year}
      <button
        className="nomination__item__button"
        onClick={() => {
          removeNomination(result.imdbID);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default NominationListItem;
