import React from "react";

import {
  header
} from "./Header.module.css";

import { largeLogo } from "../../utilities/staticImgFunctions";


////** COMPONENT **////
const Header = () => {

  ////** VARIABLES **////
  //Holds the logo banner (via an imported image)
  const logo = largeLogo();

  ////** MARK UP **////
  return (
    <header className={ `flexRow ${header}` }>
      { logo }
      <h1>Thunder Island</h1>
    </header>
  );
}


export default Header;