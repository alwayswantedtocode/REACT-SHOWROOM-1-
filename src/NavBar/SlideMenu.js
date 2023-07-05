import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import { FaTimes } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import SubMenuLinks from "./NavbarData";

const SlideMenu = () => {
  const {
    isMobileMenuOpen,
    closeMobileMenu,

    page: { Links },
  } = useGlobalContext();

  const [showInfo, setShowInfo] = useState(false);

  const mobileSubmenuref = useRef();
  useEffect(() => {});

  const clickLink = () => {
    closeMobileMenu();
    if (isMobileMenuOpen) {
      return setShowInfo(showInfo);
    }
  };

  return (
    <aside
      className={`${
        isMobileMenuOpen ? "slideMenu-wrapper show" : "slideMenu-wrapper "
      }`}
    >
      <div className="slideMenu">
        <nav className="closeBtn-Container">
          <button className="closeBtn" onClick={closeMobileMenu}>
            <FaTimes />
          </button>
        </nav>

        <section className="mobile-nav">
         
          <div className="Mobile-navlink">
            <NavLink className="navLink" onClick={() => setShowInfo(!showInfo)}>
              Brands
            </NavLink>
            <button
              className="submenu-dropdown"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </div>
          {/* Mobileview Submenu */}
          {showInfo && (
            <aside className="mobile-submenu" ref={mobileSubmenuref}>
              {SubMenuLinks.map((brand, index) => {
                const { Links } = brand;
                return (
                  <div key={index}>
                    {Links &&
                      Links.map((link, index, path) => {
                        const { subLinks } = link;
                        return (
                          <div className="mobile-submenu-brands" key={index}>
                            <NavLink
                              key={link.path}
                              to={link.path}
                              onClick={clickLink}
                            >
                              <h3>{link.names}</h3>
                            </NavLink>
                            <div className="submenu-brand-images-wrapper">
                              {subLinks &&
                                subLinks.map((details, index) => {
                                  return (
                                    <NavLink
                                      className="submenu-brand-images"
                                      key={index}
                                      onClick={clickLink}
                                    >
                                      <img
                                        src={details.image}
                                        alt={details.Description}
                                        className="submenu-image"
                                      />
                                      <p>{details.Description}</p>
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </aside>
          )}

          <div className="Mobile-navlink">
            <NavLink className="navLink" to="/Dealers" onClick={clickLink}>
              Dealers
            </NavLink>
          </div>

          <div className="Mobile-navlink">
            <NavLink className="navLink" to="/Support" onClick={clickLink}>
              Support
            </NavLink>
          </div>
          {/* </div> */}
        </section>
      </div>
    </aside>
  );
};
export default SlideMenu;
