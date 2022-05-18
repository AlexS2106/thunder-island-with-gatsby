import React from "react";
import { v4 as uuidv4 } from "uuid";

import {

} from "./ContentCardList.module.css";

import ContentCard from "../posts/ContentCard";


////** COMPONENT **////
const ContentCardList = ( { list, btnText } ) => { 

  ////** FUNCTIONS  **////
  const generateContentCards = list.map( node => {
    const { body, frontmatter } = node;
    const { title, landscapeImage, alt } = frontmatter;

    return (
      <ContentCard
        key={ uuidv4() }
        title={ title }
        img={ landscapeImage }
        alt={ alt }
        content={ body }
        btnText={ btnText }
      />
    );
  } );
  return (
    <div>
      { generateContentCards }
    </div>
  );
}

export default ContentCardList;