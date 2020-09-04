import React from "react";
import "./Header.scss";

function Header({ text }) {
  return (
    <header className="header" data-test="component-Header">
      <h1 className="header__heading">{text}</h1>
    </header>
  );
}

export default Header;
