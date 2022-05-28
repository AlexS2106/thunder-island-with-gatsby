import React from "react";
import PropTypes from "prop-types";


////** COMPONENT **////
const PageTitle = ( { title } ) => { 

  ////** MARK UP **////
  return (
      <h2 className="shadowText textCenter">
        { title }
      </h2>
  );
}

////** PROP TYPES **////
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle;