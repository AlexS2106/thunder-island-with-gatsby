import React from "react";
import { Link } from "gatsby";

import {
  navbar,
  linksWrapper
} from "./Navbar.module.css";

import Search from "./Search";

////** COMPONENT **////
const Navbar = (  ) => {

  ////** VARIABLES **////
  //List of pages and links for navlinks
  const topMenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/recipes",
      name: "Recipes",
    },
    {
      link: "/english",
      name: "English",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/about",
      name: "About"
    },
  ];
  ////** FUNCTIONS **////
  //Generates clickable links from the pages array (via topmenu in VARIABLES)
  const generateNavLinks = topMenu.map( page => {
    return (
      <Link key={ page.link } to={ page.link } activeClassName="isActive">{ page.name }</Link>
    );
  } );
  
  ////** MARK UP **////
  return (
    <nav className={ navbar }>
      <ul className={ linksWrapper }>
        { generateNavLinks }
        <Search />
      </ul>
    </nav>
  );
}

export default Navbar;