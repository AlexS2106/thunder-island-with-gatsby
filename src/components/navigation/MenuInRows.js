import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import {
  menuInRowsStyling
} from "./MenuInRows.module.css";

import { makeTitle } from '../../utilities/functions';


////** COMPONENT **////
const MenuInRows = ( { menu, ...props } ) => {

  ////** FUNCTIONS **////
  //Generates a list with clickable options (via props.menu) The onclick func and button text reside in the parent
  const generateMenuList = menu.map( ( item ) => {
    return (
      <li
        key={ uuidv4() }>
        <button value={ item }
        onClick={ props.onClick } >
        { makeTitle( item ) }
        </button>
      </li>
    );
  } );

    ////** MARK UP **////
  return (
    <ul className={ menuInRowsStyling}>
      { generateMenuList }
    </ul>
    
  );
}

////** PROP TYPES **////
MenuInRows.propTypes = {
  menu: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuInRows;