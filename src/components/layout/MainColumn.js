import React from "react";
import PropTypes from "prop-types";

import {
  column
} from "./ColumnStyles.module.css";


  ////** COMPONENT **////
const MainColumn = ( { children } ) => {

  ////** MARK UP **////
  return (
    <main className={ column }>
      { children }
    </main>
  );
}

////** PROP TYPES **////
MainColumn.propTypes = {
  children: PropTypes.oneOfType( [
    PropTypes.node,
    PropTypes.array,
    PropTypes.element
  ] ),
}

export default MainColumn;