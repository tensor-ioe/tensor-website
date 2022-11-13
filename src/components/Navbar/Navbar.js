import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
    return (
        <nav className={"Navbar"}>
            <Link className={"Navbar-logolink"} to="/">
                <img className={"Navbar-logo"} src={logo} alt="logo"/>
            </Link>
            <div className="Navbar-navlink-container">
                <Link className={"Navbar-navlink"} to={"/programs"}>
                    Programs
                </Link>
                <HashLink className={"Navbar-navlink"} smooth to={"/#about"}>
                    About us
                </HashLink>
                <HashLink className={"Navbar-navlink"} smooth to={"/#contact"}>
                    Contact us
                </HashLink>
                <Link className={"Navbar-navlink-filled"} to={"/apply"}>
                    Apply
                </Link>
            </div>
        </nav>
    );
}