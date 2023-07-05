import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../GlobalContext";
import { NavLink } from "react-router-dom";

const SubMenu = () => {
  const {
    openSubMenu,
    closeSubMenu,
    isSubMenuOpen,
    page: { names, Links },
  } = useGlobalContext();

  const dropdownRef = useRef();

  // useEffect(() => {
  //   const submenu = dropdownRef.current;
  //   const { bottom } = location;
  //   submenu.style.top = `${bottom}px`;
  // }, [location]);

  // Click outside the Submenu to close
  const handleClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      closeSubMenu();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll greater than zero to close Submenu
  const handleScroll = () => {
    if (openSubMenu && dropdownRef.current && window.pageYOffset > 0) {
      closeSubMenu();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openSubMenu, closeSubMenu]);

  const clickLink = () => {
    closeSubMenu();
  };
  // className = "subMenu";
  return (
    <div
      className="subMenu mouseover"
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
    >
      {Links.map((Link, firstIndex) => {
        const { names, path } = Link;
        return (
          <div className="brandContainer mouseover" key={firstIndex}>
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
    </div>
  );
};

export default SubMenu;
