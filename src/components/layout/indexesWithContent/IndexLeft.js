import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { v4 as uuidv4 } from "uuid";

import {
  container,
  extraPadding,
  marginLeft2,
  contentHeight35,
  contentNone,
  blurHr,
  lastHr
} from "./IndexLeft.module.css";

import Button from "../../buttons/Button";

import MDX from "../../../providers/MDX";
import { makeTitle, makeSlug, sortingUlsFromNodes } from "../../../utilities/functions";


////** COMPONENT **////
const IndexLeft = ( { list } ) => { 
    ////** STATE **////
  const [ clickedTitle, setClickedTitle ] = useState( "" );

  ////** VARIABLES **////
  const showContentButtonText = "Continue";
  const closeContentButtonText = "Close";
  
  ////** FUNCTIONS  **////
  //Toggle state from true to false to show or hide the full content and scroll to the correct height when the content is closed
  function contentHandler ( title ) {
    if ( clickedTitle === makeSlug(title) ) {
      setClickedTitle( "" );
      scrollTo( `#${makeSlug( title )}` );
    } else {
      setClickedTitle( makeSlug( title ) );
    }
  }
  //ContentIndex (create 3 lists separating all writing content into their subcategories)
const contentIndexList = [
    {
      ulName: "my-articles",
      nodesList: sortingUlsFromNodes( list, "article" )
    },
    {
      ulName: "my-poems",
      nodesList: sortingUlsFromNodes( list, "poem" )
    },
    {
      ulName: "my-reviews",
      nodesList: sortingUlsFromNodes( list, "review" )
    },
    {
      ulName: "my-stories",
      nodesList: sortingUlsFromNodes( list, "story" )
    },
];
//ContentIndex (present the 3 lists in a side bar)
  const generateIndex = contentIndexList.map( item => {

  const liTitlesList = item.nodesList.map( node =>
    <li key={ uuidv4() }>
      <button className="indexItem" onClick={
        () => { navigate(`/${node.frontmatter.mainCategories[0]}/${node.frontmatter.slug}`) } }>{ node.frontmatter.title }</button>
    </li> );
  
    return (
      <ul key={ uuidv4() } className="pad1">
        <h6 className={ marginLeft2 }>{ makeTitle(item.ulName) }</h6>
        { liTitlesList }
      </ul>
    );
} ); 
  //Content
  const generateContent = list.map( node => {
    const { body, frontmatter } = node;
    const { title, landscapeImage, alt } = frontmatter;
    return (
      <div key={ uuidv4() } id={ makeSlug(title) }>
        <article className={ clickedTitle === makeSlug(title) ? contentNone : contentHeight35 }>
        <h4 className="pad1 shadowText">{ title }</h4>
          <div className="pad1">
            <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } />
          </div>
          <section className="flexColumn">
            <div>
            { MDX(body) }
            </div>
          </section>
        </article>
        <div className={ "flexColumn textCenter" }>
          <hr role="none" className={ blurHr }/>
          <span className="pad1">
            <Button onClick={() => contentHandler(title) } innerText={ clickedTitle === makeSlug(title) ? closeContentButtonText : showContentButtonText } />
          </span>
        <hr role="none" className={ lastHr }/>
        </div>
      </div>
    )
  } );

    ////** MARK UP  **////
  return (
    <div className={ container } >
      <div>
        <h3 className={ `pad1` }>Select An Article</h3>
        { generateIndex }
      </div>
      <div className={ extraPadding }>
        <h3 className="pad1">Quick Read</h3>
        { generateContent }
      </div>
    </div>
  );
}

////** PROP TYPES **////
IndexLeft.propTypes = {
list: PropTypes.array.isRequired,
}

export default IndexLeft;