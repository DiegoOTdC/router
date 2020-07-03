import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>{" "}
      <NavLink to="/About">About</NavLink>{" "}
      <NavLink to="/Discover">DiscoverMovies</NavLink>
    </div>
  );
}
