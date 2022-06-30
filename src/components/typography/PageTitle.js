import React from "react";
import PropTypes from "prop-types";

import {
  long
} from "./PageTitle.module.css";

////** COMPONENT **////
const PageTitle = ( { title, size } ) => { 

  let width;
  if ( size === "long" ) { width = long }; 
  ////** MARK UP **////
  return (
      <h2 className={`shadowText textCenter ${width}`}>
        { title }
      </h2>
  );
}

////** PROP TYPES **////
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle;