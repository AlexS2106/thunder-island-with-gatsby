import React from "react";
import PropTypes from "prop-types";

import {
  wide
} from "./layoutStyles.module.css";


  ////** COMPONENT **////
const DivColumn = ( { children } ) => {

  ////** MARK UP **////
  return (
    <div className={ `flexColumn ${wide}` }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
DivColumn.propTypes = {
  children: PropTypes.oneOfType( [
    PropTypes.node,
    PropTypes.object,
    PropTypes.element
  ] ).isRequired,
}

export default DivColumn;