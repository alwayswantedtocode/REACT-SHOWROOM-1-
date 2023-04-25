import { Link, NavLink } from "react-router-dom";
import Logo from "../NavBar/Logo";
import { FaSearch, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";

import React from "react";

const NavBar = () => {
  const { openMobileMenu, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const brand = e.target.textContent;
    openSubMenu(brand);
  };

  const removeSubMenu = (e) => {
    if (!e.target.classList.contains("navLink")) {
      // console.log(e.target);
      closeSubMenu();
    }
  };

  return (
    <header>
      <nav className="Nav" onMouseOver={removeSubMenu}>
        <div className="NavContainer">
          <div className="navLogo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <button className="toggle-Menubar" onClick={openMobileMenu}>
            <FaBars />
          </button>
          <div className="navLinkContainer">
            <NavLink className="navLink " onMouseOver={displaySubMenu}>
              Brands
            </NavLink>
            <NavLink className="navLink" to="/Dealers">
              Dealers
            </NavLink>
            <NavLink className="navLink" to="/Support">
              Support
            </NavLink>
            <button className="signIn-btn">
              <NavLink className="navLink">Sign in</NavLink>
            </button>
            <button className="search-btn">
              <NavLink className="navLink">
                <FaSearch />
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
