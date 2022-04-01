import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

export function singleArrowRight () { 
  return (
    <FontAwesomeIcon icon={ faAngleRight } size="1x" />
  );
}
export function singleArrowLeft () { 
  return (
    <FontAwesomeIcon icon={ faAngleLeft } size="1x" />
  );
}
export function doubleArrowRight () { 
  return (
    <FontAwesomeIcon icon={ faAnglesRight } size="1x" />
  );
}
export function doubleArrowLeft () { 
  return (
    <FontAwesomeIcon icon={ faAnglesLeft } size="1x" />
  );
}