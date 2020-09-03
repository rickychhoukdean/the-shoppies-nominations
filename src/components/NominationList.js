import React from "react";
import NominationListItem from "./NominationListItem";

function NominationList({ nominations, removeNomination }) {
  let res = nominations.map((result, id) => {
    return (
      <NominationListItem
        key={id}
        result={result}
        removeNomination={removeNomination}
      />
    );
  });

  return <section className="section-nomination">{res}</section>;
}

export default NominationList;
