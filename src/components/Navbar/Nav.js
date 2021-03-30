import React from "react";
import SearchName from "../SearchName/SearchName.js";
import SearchDOB from "../SearchDOB/SearchDOB.js";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="input-group col-8">
          <SearchName />
        </div><br />
        <div className=" input-group col-8">
          <SearchDOB />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
