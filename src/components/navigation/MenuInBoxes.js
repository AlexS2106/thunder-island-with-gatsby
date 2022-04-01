import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  menuInBoxesStyling
} from "./MenuInBoxes.module.css";

import Button from "../buttons/Button";

import { makeTitle } from "../../utilities/functions";


const MenuBoxes = ( { menu, ...props } ) => {


  const generateMenuBoxes = menu.map( ( menuItem ) => {
    return (
      <div key={ uuidv4() }>
        { menuItem.image }
        <Button
          innerText={ makeTitle( menuItem.name ) }
          role="link"
          onClick={ props.onClick } />
      </div>
    );
  } );

  return (
    <div className={ menuInBoxesStyling }>
      { generateMenuBoxes }
    </div>
  );

}

export default MenuBoxes;