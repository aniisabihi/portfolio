import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="page-header" id="myHeader">
      <nav className="justify-content-between">
        <Link to="/" id="home-button" className="logo" title="Home">
          <strong>ANIISA BIHI</strong>
        </Link>

        <div className="header-right">
          <Link to="/" id="home-button" title="Home">
            WORK
          </Link>
          <Link to="/about" id="home-button" title="About">
            ABOUT
          </Link>
          <Link to="/CV" target="_blank" id="home-button" title="CV">
            CV
          </Link>
        </div>
      </nav>
    </header>
  );
}
