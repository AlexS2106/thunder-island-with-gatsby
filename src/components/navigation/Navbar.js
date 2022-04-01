import React from "react";
import { Link } from "gatsby";

import {
  navbar,
  linksWrapper,
  isActive
} from "./Navbar.module.css";

import Search from "./Search";


const Navbar = (  ) => {

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
      link: "/health",
      name: "Health",
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
  
  const generateNavLinks = topMenu.map( page => {
    return (
      <Link key={ page.link } to={ page.link } activeClassName={ isActive }>{ page.name }</Link>
    );
  })

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