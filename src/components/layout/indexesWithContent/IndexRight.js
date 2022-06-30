import React from "react";

import {
  container
} from "./IndexRight.module.css";

const IndexRight = ( { children } ) => { 
  return (
    <div className={ container }>
      { children }
    </div>
  );
}

export default IndexRight;