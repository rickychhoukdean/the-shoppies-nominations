import React from "react";

function Header({ text }) {
  return (
    <header className="header" data-test="component-Header">
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
