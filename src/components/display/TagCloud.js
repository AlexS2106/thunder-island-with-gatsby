import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  tagCloud
} from "./TagCloud.module.css"


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
    <section className={ `flexColumn ${tagCloud}` }>
      <header className="pad1">
        <h3 className="textCenter shadowText">Tag Cloud</h3>
      </header>
      <ul>
        { generateTagCloud }
      </ul>
    </section>
  );
}

export default TagCloud;