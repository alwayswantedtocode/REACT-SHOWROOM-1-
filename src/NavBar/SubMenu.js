import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import { NavLink } from "react-router-dom";

const SubMenu = () => {
  const {
    openSubMenu,
    closeSubMenu,
    isSubMenuOpen,
    page: { Links, names },
  } = useGlobalContext();

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeSubMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (openSubMenu && dropdownRef.current && window.pageYOffset > 0) {
        closeSubMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openSubMenu, closeSubMenu]);

  const clickLink = () => {
    closeSubMenu();
  };

  return (
    <aside
      className={`${isSubMenuOpen ? "subMenu active" : "subMenu"}`}
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
    >
      {Links.map((Link, firstIndex) => {
        const { names, path } = Link;
        return (
          <div className="brandContainer" key={firstIndex}>
            <NavLink
              className="brand-name"
              key={path}
              to={path}
              onClick={clickLink}
            >
              <h3>{names}</h3>
            </NavLink>
            {/* <div className={`brandNav${column}`}> */}
            <div className="brand-image-container">
              {Link.subLinks.map((subLink, secondIndex) => {
                const { image, Description, URL } = subLink;
                return (
                  <NavLink
                    className="brand-image"
                    key={secondIndex}
                    onClick={clickLink}
                  >
                    <img src={image} alt={Description} className="image" />
                    <p>{Description}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default SubMenu;
