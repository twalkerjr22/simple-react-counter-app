import React, { Component } from "react";


// Stateless Navbar component. 
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Simple React Counter App
        <span className="badge badge-pill badge-secondary m-3">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
