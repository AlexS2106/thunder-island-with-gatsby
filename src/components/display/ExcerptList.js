import React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  excerptList,
} from "./ExcerptList.module.css";

import PostMedium from "../posts/PostMedium";


////** COMPONENT **////
const ExcerptList = ( { list, ...props } ) => {

////** FUNCTIONS **////
  //Generate a list of excerpts of random posts 
  const generatedExcerpts = list.map( ( listItem ) => {
    return (
      <div key={ uuidv4() }>
        <PostMedium
          post={ listItem }
          { ...props }
        />
        <h3><Link to={ `/${ listItem.frontmatter.mainCategories[ 0 ] }` }>See more in { listItem.frontmatter.mainCategories }?</Link></h3>
      </div>
    );
  } );
  
  ////** MARK UP**////
  return (
    <div className={ excerptList }>
      { generatedExcerpts }
    </div>
  );
}

export default ExcerptList;
