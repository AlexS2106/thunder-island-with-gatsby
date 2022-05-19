import React from "react";
import PropTypes from "prop-types";

import {
  btn
} from "./Button.module.css";

////** COMPONENT **////
const Button = ( props ) => {

////** MARK UP **////
  return (
    <button className={ btn } onClick={ props.onClick } >{ props.innerText }</button>
  );

}

////** PROP TYPES **////
Button.propTypes = {
  innerText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;