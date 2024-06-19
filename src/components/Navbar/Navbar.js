import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={"Navbar"}>
      <Link className={"Navbar-logolink"} to="/">
        <img className={"Navbar-logo"} src={logo} alt="logo" />
      </Link>

      <div className="Navbar-navlink-container">
        {/* {
                location.pathname !== "/programs" &&
                <Link className={"Navbar-navlink"} to={"/programs"}>
                    Programs
                </Link>
                } */}
        <HashLink className={"Navbar-navlink"} smooth to={"/#about"}>
          About us
        </HashLink>
        <HashLink className={"Navbar-navlink"} smooth to={"/#contact"}>
          Contact us
        </HashLink>
        {location.pathname !== "/apply" ? (
          <Link className={"Navbar-navlink-filled"} to={"/apply"}>
            Apply
          </Link>
        ) : (
          <Link
            className={"Navbar-navlink-filled"}
            to={"roles-and-responsibility"}
          >
            Responsibiliy
          </Link>
        )}
      </div>
    </nav>
  );
}
