import React from "react";
import ParcelLogo from "../img/batman-logo.png";

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img width="150" src={ParcelLogo} alt="" />
      </div>
    </nav>
  </header>
);

export default Header;
