import React from "react";
import PropTypes from "prop-types";

import {
  small,
  medium,
  large
} from "./Spacer.module.css";

////** COMPONENT **////
const Spacer = ( { size } ) => {

  ////** VARIABLES **////
  //Determine space size 
  let space;
  
  if ( size === "small" ) { space = small }
  if ( size === "medium" ) { space = medium }
  if ( size === "large" ) { space = large }
  
  ////** MARK UP **////  
  return (
    <div className={ space } role="none" />
  );
}

////** PROP TYPES **////
Spacer.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Spacer;