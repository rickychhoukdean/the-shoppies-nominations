import React from "react";

function Header({ header }) {
  return (
    <header className="header" data-test="component-Header">
      <h1>{header}</h1>
    </header>
  );
}

export default Header;
