import React from "react";

import {
  header
} from "./Header.module.css";

import { largeLogo } from "../../utilities/staticImgFunctions";


const Header = () => {
  
  const logo = largeLogo();
  
  return (
    <header className={ header }>
      { logo }
      <h1>Thunder Island</h1>
    </header>
  );
}

export default Header;