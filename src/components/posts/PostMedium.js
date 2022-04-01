import React, { useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  postMedium,
  row,
  col,
  imageWrapper,
  textWrapper,
} from "./PostMedium.module.css";

import Button from "../buttons/Button";

import { DispatchContext } from "../../providers/ContextProvider";
import { listSubcategories, reduceSentenceLength } from "../../utilities/functions";


const PostMedium = ( { post, location, ...props } ) => {
    
  //Data Variables
  const { frontmatter } = post;
  const { title, slug, mainCategories, date, author, portraitImage, alt, photographer, excerpt } = frontmatter;

  //3rd party Variables
  const dispatch = useContext( DispatchContext );

  //Component
  const innerText = props.innerText ? props.innerText : "See More";
  const generatedExcerpt = reduceSentenceLength(excerpt, props.excerptLength || 100);

  const mainCats = mainCategories.map( ( category ) => {
    return (
      <h4 key={ uuidv4() } >{ category.name }</h4>
    );
  } );
  
  // const subCats = listSubcategories(frontmatter).map( ( category ) => {
  //   return (
  //     <h4 key={ uuidv4() }>{ category.name }</h4>
  //   );
  // } );
  
  const generatedImage = portraitImage ?
    <div className={ imageWrapper }>
      <GatsbyImage image={ getImage( portraitImage ) } alt={ alt } />
      { props.hasPhotographer && photographer !== "" ? <cite>photo by { photographer }</cite> : null }
    </div>
    : null;
  
  
  return (
    <article className={ postMedium }>
      <div>
        { props.showDate && <time dateTime={ date }> { date } </time> }
        <h3>{ title }</h3>
        { mainCats }
        {/* { props.showSubcategories && subCats } */}
        { props.showAuthor && <address rel="author">by { author }</address> }
      </div>
      <div className={ row }>
        { generatedImage }
        <div className={ textWrapper }>
          <p>{ generatedExcerpt }</p>
        </div>
      </div>
      <div className={ col }>
        <Button
          innerText={ innerText }
          onClick={ () => {
            dispatch( { type: "select_posts", payload: slug } );
            navigate( `/${ mainCategories }/${ slug }/` );
          } }
        />
      </div>
    </article>
  );
}
  
PostMedium.propTypes = {
  post: PropTypes.object,
  location: PropTypes.object,
  excerptLength: PropTypes.number,
  showDate: PropTypes.bool,
  showAuthor: PropTypes.bool,
  hasPhotographer: PropTypes.bool,
  showSubCategories: PropTypes.bool,
  innerText: PropTypes.string,

}
  
export default PostMedium;