import React from "react";
import PropTypes from "prop-types";
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
//Posts with a main category of health will be linked to recipes while the health category has so few posts.
    const mainCategoryLink = listItem.frontmatter.mainCategories[ 0 ] === "health" ? "recipes" : listItem.frontmatter.mainCategories[ 0 ]; 

    return (
      <div key={ uuidv4() }>
        <PostMedium
          post={ listItem }
          { ...props }
        />
        <h3><Link to={ `/${ mainCategoryLink }` }>See more in { listItem.frontmatter.mainCategories }?</Link></h3>
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

ExcerptList.propTypes = {
  list: PropTypes.array.isRequired,
  innerText: PropTypes.string,
  excerptLength: PropTypes.number
}

export default ExcerptList;
