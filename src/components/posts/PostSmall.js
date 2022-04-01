import React, { useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  postSmall,
  imageWrapper
} from "./PostSmall.module.css";

import Button from "../buttons/Button";

import { DispatchContext } from "../../providers/ContextProvider";


const PostSmall = ( { post, ...props } ) => {

  //Data 
  const { id, frontmatter } = post;
  const { title, slug, mainCategories, landscapeImage, alt } = frontmatter;

   //3rd Party
  const dispatch = useContext( DispatchContext );

  //Component
  const { innerText } = props;

  return (
    <div className={ `${postSmall} ${props.addedClasses}` }>
      <h4>{ title }</h4>
      <div className={ imageWrapper }>
        <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
      </div>
      <Button onClick={
        () => {
          dispatch( { type: "select_posts", payload: id } )
           navigate( `/${ mainCategories }/${ slug }/` );
        }
      } innerText={ innerText }></Button>
    </div>
  );
}

PostSmall.propTypes = {
  post: PropTypes.object,
  innerText: PropTypes.string,
}

export default PostSmall;