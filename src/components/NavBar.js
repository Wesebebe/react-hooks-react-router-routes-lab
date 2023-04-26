import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "15px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return (
    <div className="navbar">
        <NavLink  to="/home" exact >Home</NavLink>
        <NavLink  to="/movies" >Movies</NavLink>
        <NavLink  to="/directors" >Directors</NavLink>
        <NavLink  to="/actors" >Actors</NavLink>
    </div>
  )
}

export default NavBar;
