import React from "react";
import PropTypes from "prop-types";

import { 
  pageTitleStyling
} from "./PageTitle.module.css";


////** COMPONENT **////
const PageTitle = ( { title } ) => { 

  ////** MARK UP **////
  return (
      <h2 className={ pageTitleStyling }>
        { title }
      </h2>
  );
}

////** PROP TYPES **////
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle;