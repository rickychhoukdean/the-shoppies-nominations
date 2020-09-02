import React from "react";

function NominationList({ nominations }) {
  let res = nominations.map((result, id) => {
    return <div key={id}>{result}</div>;
  });

  return <>{res}</>;
}

export default NominationList;
