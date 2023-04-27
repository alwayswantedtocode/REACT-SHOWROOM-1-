import React, { useState, useContext } from "react";
import SubMenuLinks from "./NavBar/NavbarData";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const [location, setLocation] = useState({});

  const [page, setPage] = useState({
    names: "",
    Links: [],
  }); //refer to read.me

  //Slide Menu
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const names = SubMenuLinks.find((link) => link.page === text);
    setPage(names);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    // window.scrollTo(0, 0); // set pageYOffset to zero
  };

  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        closeMobileMenu,
        isMobileMenuOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuOpen,
        location,
        page,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
