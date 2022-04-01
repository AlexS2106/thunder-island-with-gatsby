import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  menuInRowsStyling
} from "./MenuInRows.module.css";

import { makeTitle } from '../../utilities/functions';


const MenuInRows = ( { menu, ...props } ) => { 
  const generateMenuList = menu.map( ( item ) => {
    return (
      <li
        key={ uuidv4() }
        onClick={ props.onClick } >
        { makeTitle( item ) }
      </li>
    );
  } );
  return (
    <ul className={ menuInRowsStyling}>
      { generateMenuList }
    </ul>
    
  );
}

export default MenuInRows;