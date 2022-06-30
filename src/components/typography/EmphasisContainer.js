import React from "react";

import {
  emphasis
} from "./EmphasisContainer.module.css";

const EmphasisContainer = ( { children } ) => { 
  return (
    <div className={ emphasis }>
      { children }
    </div>
  )
}

export default EmphasisContainer;