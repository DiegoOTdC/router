import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <ul className="navbar-nav mx-auto">
          <div className="navbar-brand">MovieDataBase</div>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/aboutPage">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/discoverMoviesPage/:searchText">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
