import React from "react";
import PropTypes from "prop-types";

import {
  section,
  column,
  row
} from "./Section.module.css";

////** COMPONENT **////
const Section = ( { children, ...props } ) => {

  ////** VARIABLES **////
  //Determine flex col or flex row for section styling - defaults to column
  const flexDirect = !props.direction ? column : props.direction === "row" ? row : column;

  ////** MARK UP **////
  return (
    <section className={ `${ section } ${ flexDirect }` } >
      { children }
    </section>
  );
}

////** PROP TYPES **////
Section.propTypes = {
  children: PropTypes.oneOfType( [
    PropTypes.node,
    PropTypes.array,
    PropTypes.element
  ] ).isRequired,
  direction: PropTypes.string,
}

export default Section;