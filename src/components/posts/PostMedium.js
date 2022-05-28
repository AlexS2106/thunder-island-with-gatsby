import React, { useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  postMedium,
  imageWrapper,
  textWrapper,
  btnWrapper
} from "./PostMedium.module.css";

import Button from "../buttons/Button";

import { DispatchContext } from "../../providers/ContextProvider";
import { listSubcategories, reduceSentenceLength } from "../../utilities/functions";


////** COMPONENT **////
const PostMedium = ( { post, ...props } ) => {

  ////** CONTEXT **////
  const dispatch = useContext( DispatchContext );
    
  ////** VARIABLES **////
  //Unpacking imported data
  const { frontmatter } = post;
  const { title, slug, mainCategories, date, author, portraitImage, alt, photographer, excerpt } = frontmatter;
  //article -> Button
  const innerText = props.innerText ? props.innerText : "See More";

  ////** FUNCTIONS **////
  //Cuts the excerpt of the post into the required length passed by props or to 100 characters (excerpt passed by props.post)
  const generatedExcerpt = reduceSentenceLength(excerpt, props.excerptLength || 100);
  //Generates a list of h4 from the mainCategories (via props.post.frontmatter.mainCategories)
  const mainCats = mainCategories.map( ( category ) => {
    return (
      <h4 key={ uuidv4() } className="textCenter shadowText" >{ category.name }</h4>
    );
  } );
  //Checks for a list on subcategories and generates a list of h4 from the mainCategories (via props.post.frontmatter.subcategories)
  const subCats = listSubcategories(frontmatter).map( ( category ) => {
    return (
      <h4 key={ uuidv4() } className="textCenter shadowText">{ category.name }</h4>
    );
  } );
   //Checks for a portraitImage and makes an image and wrapper if one is found (via props.post.frontmatter.portraitImage) 
  const generatedImage = portraitImage ?
    <div className={ `flexColumn pad1 ${imageWrapper}` }>
      <GatsbyImage image={ getImage( portraitImage ) } alt={ alt } />
      { props.hasPhotographer && photographer !== "" ? <cite>photo by { photographer }</cite> : null }
    </div>
    : null;
  
    ////** MARK UP **////
  return (
    <article className={ `pad1 bgLight ${postMedium}` }>
      <div>
        { props.showDnte && <time dateTime={ date } className="textCenter shadowText"> { date } </time> }
        <h3 className="textCenter shadowText">{ title }</h3>
        { mainCats }
        { props.showSubcategories && subCats }
        { props.showAuthor && <address rel="author" className="textCenter shadowText" >by { author }</address> }
      </div>
      <div className="flexRow">
        { generatedImage }
        <div className={ `flexColumn pad1 ${textWrapper}` }>
          <p className="sideBorderDark sideBorderPad">{ generatedExcerpt }</p>
        </div>
      </div>
      <div className={ `flexColumn ${btnWrapper}` }>
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
  
////** PROP TYPES **////
PostMedium.propTypes = {
  post: PropTypes.object,
  excerptLength: PropTypes.number,
  showDate: PropTypes.bool,
  showAuthor: PropTypes.bool,
  hasPhotographer: PropTypes.bool,
  showSubCategories: PropTypes.bool,
  innerText: PropTypes.string,
}
  
export default PostMedium;