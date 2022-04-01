import React from "react";

import {
  small,
  medium,
  large
} from "./Spacer.module.css";


const Spacer = ( { size } ) => {

  let space;
  
  if ( size === "small" ) { space = small }
  if ( size === "medium" ) { space = medium }
  if ( size === "large" ) { space = large }
  
  return (
    <div className={ space }></div>
  );
}

export default Spacer;