import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../NavBar/Logo";
import { FaSearch, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";
import SubMenu from "./SubMenu";

const NavBar = () => {
  const { openMobileMenu, openSubMenu, closeSubMenu, isSubMenuOpen } =
    useGlobalContext();

  // DISAPEARING NAVBAR
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visibleNav = currentScrollPos < prevScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visibleNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  //Mouseover buttons
  const displaySubMenu = (e) => {
    const brand = e.target.textContent;

    const tempbtn = e.target.getBoundingClientRect();
    // console.log(tempbtn);

    const bottom = tempbtn.bottom;
    openSubMenu(brand, { bottom });
    // openSubMenu(brand);
    console.log(bottom);
  };
  // const removeSubMenu = (e) => {
  //   if (!e.target.classList.contains("mouseover")) {
  //     // console.log(e.target);
  //     closeSubMenu();
  //   }
  // };

  return (
    <header>
      <nav
        className="Nav"
        style={{ display: visible ? "flex" : "none" }}
        // onMouseOver={removeSubMenu}
      >
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
            <NavLink className="navLink mouseover" onMouseOver={displaySubMenu}>
              Brands
            </NavLink>
            <NavLink className="navLink mouseover" to="/Dealers">
              Dealers
            </NavLink>
            <NavLink className="navLink mouseover" to="/Support">
              Support
            </NavLink>
            <button className="signIn-btn">
              <NavLink className="navLink mouseover">Sign in</NavLink>
            </button>

            <button className="search-btn">
              <NavLink className="navLink mouseover">
                <FaSearch />
              </NavLink>
            </button>
          </div>
        </div>
        <aside
          className={`${
            isSubMenuOpen
              ? "subMenuContainer active mouseover"
              : "subMenuContainer"
          }`}
        >
          <SubMenu className="mouseover" />
        </aside>
      </nav>
    </header>
  );
};

export default NavBar;
