import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  tagCloudStyling
} from "./TagCloud.module.css"

import Section from "../layout/Section";

import { makeTitle } from "../../utilities/functions";


////** COMPONENTS **////
const TagCloud = ( { tags, ...props } ) => { 

  ////** FUNCTIONS **////
  //Generates a list, button and onclick prop for each tag
  const generateTagCloud = tags.map( tag => {
    return (
      <li key={ uuidv4() }>
        <button
          value={ tag }
          onClick={ props.onClick }>
          { makeTitle( tag ) }
        </button>
      </li>
    );
  } );

  ////** MARK UP **////
  return (
    <Section>
      <header>
        <h3>Tag Cloud</h3>
      </header>
      <ul className={ tagCloudStyling }>
        { generateTagCloud }
      </ul>
    </Section>
  );
}

export default TagCloud;