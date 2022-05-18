import React from "react";

import {
  signature,
  signed,
  strike,
  rotate
 } from "./Signature.module.css";

import { makeTitle } from "../../utilities/functions";

const Signature = ( { signedBy, ...props } ) => { 
  
  let addedClasses = [];
  //customisation options
  if ( props.rotate ) { addedClasses.push( rotate ) }

  return (
    <div className={ [ ...addedClasses, signature ].join( " " )}>
      <address className={ signed } rel="author" >{ makeTitle(signedBy) || "Alex" }</address>
      <hr className={ strike } role="none" />
    </div>
  );
}

export default Signature;