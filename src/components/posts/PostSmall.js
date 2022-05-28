import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  btnWrapper,
} from "./PostSmall.module.css";

import Button from "../buttons/Button";


////** COMPONENT **////
const PostSmall = ( { post, ...props } ) => {

  ////** STATE & CONTEXT **////

  ////** VARIABLES **////
  //Unpacking data
  const { frontmatter } = post;
  const { title, slug, mainCategories, landscapeImage, alt } = frontmatter;
  //Button
  const { innerText } = props;

  ////** MARK UP **////
  return (
    <div className="flexColumn">
      <h4 className="pad1 shadowText">{ title }</h4>
      <div className={ "pad1" }>
        <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
      </div>
      <div className={ `pad1 ${ btnWrapper }` }>
        <Button onClick={
          () => { navigate( `/${ mainCategories }/${ slug }/` ) }
        } innerText={ innerText }></Button>
      </div>
    </div>
  );
}

  ////** PROP TYPES **////
PostSmall.propTypes = {
  post: PropTypes.object.isRequired,
  innerText: PropTypes.string,
  addedClasses: PropTypes.string,
}

export default PostSmall;