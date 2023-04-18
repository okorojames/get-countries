import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function backToTop() {
    scrollTo(0, 0);
  }
  return (
    <header style={{ marginBottom: "40px" }}>
      <nav>
        <Link to="/" className="nav--logo">
          REST COUNTRIES
        </Link>
        <div className="nav--links">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <div className="back--to--top" onClick={backToTop}>
        &uarr;
      </div>
    </header>
  );
};

export default Header;
