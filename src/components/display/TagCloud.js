import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  tagCloudStyling
} from "./TagCloud.module.css"

import Section from "../../components/layout/Section";

import { makeTitle } from "../../utilities/functions";


const TagCloud = ( { tags } ) => { 

  const generateTagCloud = tags.map( tag => {
    return (
      <li key={ uuidv4() }>{ makeTitle( tag ) }</li>
    );
  } );

  return (
    <Section direction="column">
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