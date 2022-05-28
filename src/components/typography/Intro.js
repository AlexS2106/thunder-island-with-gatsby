import React from "react";
import PropTypes from "prop-types";

import {
  sized
} from "./Intro.module.css";

 ////** COMPONENT **////
const Intro = ( { children } ) => {
 ////** MARK UP **////
  return (
    <p className={ `sideBorderDark sideBorderPad ${ sized }` }>
      { children }
    </p>
  );
}

////** PROP TYPES **////
Intro.propTypes = {
  children: PropTypes.any.isRequired
}

export default Intro;