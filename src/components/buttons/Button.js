import React from "react";

import {
  btn
} from "./Button.module.css";


const Button = ( props ) => {

  const innerText = props.innerText;

  return (
    <button className={ btn } onClick={ props.onClick } >{ innerText }</button>
  );

}

export default Button;