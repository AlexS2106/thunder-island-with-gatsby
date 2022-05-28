import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  menuInBoxesStyling
} from "./MenuInBoxes.module.css";

import Button from "../buttons/Button";

import { makeTitle } from "../../utilities/functions";


////** COMPONENT **////
const MenuInBoxes = ( { menu, ...props } ) => {

  ////** FUNCTIONS **////
  //Generates a grid of boxes with a clickable button centre and a picture background (via props.menu) The onclick func and button innertext reside in the parent
  const generateMenuBoxes = menu.map( ( menuItem ) => {
    return (
      <div key={ uuidv4() } className="flexColumn">
        { menuItem.image }
        <Button
          innerText={ makeTitle( menuItem.name ) }
          role="link"
          onClick={ props.onClick } />
      </div>
    );
  } );

  ////** MARK UP **////
  return (
    <div className={ menuInBoxesStyling }>
      { generateMenuBoxes }
    </div>
  );
}

////** PROP TYPES **////
MenuInBoxes.propTypes = {
  menu: PropTypes.array.isRequired,
  innerText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default MenuInBoxes;