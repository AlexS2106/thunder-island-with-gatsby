import React from "react";
import PropTypes from "prop-types";

import {
  column
} from "./ColumnStyles.module.css";


  ////** COMPONENT **////
const DivColumn = ( { children } ) => {

  ////** MARK UP **////
  return (
    <div className={ column }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
DivColumn.propTypes = {
  children: PropTypes.oneOfType( [
    PropTypes.node,
    PropTypes.array,
    PropTypes.element
  ] ),
}

export default DivColumn;