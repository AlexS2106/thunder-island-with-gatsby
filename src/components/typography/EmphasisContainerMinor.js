import React from "react";

import {
  emphasis
} from "./EmphasisContainerMinor.module.css";

const EmphasisContainerMinor = ( { children } ) => { 
  return (
    <div className={ emphasis }>
      { children }
    </div>
  )
}

export default EmphasisContainerMinor;