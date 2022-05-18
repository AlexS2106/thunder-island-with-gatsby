import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from "uuid";

import { 
  contentCard35,
  contentCardNone,
  contentCardTitle,
  contentCardImage,
  contentEnd,
  contentEndBlurHr,
  contentEndButtonWrapper,
  contentEndFinalHr
} from "./ContentCard.module.css";

import Section from "../../components/layout/Section";
import Button from "../../components/buttons/Button";

import MDX from "../../providers/MDX";
import { makeSlug } from "../../utilities/functions";


////** COMPONENT **////
const ContentCard = ( { title, img, alt, content, btnText } ) => {
  ////** STATE **////
  const [ on, toggle ] = useState( false );
  const openContentRef = useRef();
  useEffect( () => {
    if ( !on ) { openContentRef.current.scrollIntoView(); }
  }, [ on ] );

////** FUNCTIONS **////
  //Toggle state from true to false
  const showContentHandler = () => toggle( !on );

  ////** MARK UP**////
  return (
      <div key={ uuidv4() } ref={ openContentRef } >
        <article className={ on ? contentCardNone : contentCard35 }>
        <h4 className={ contentCardTitle } id={ makeSlug(title)}>{ title }</h4>
          <div className={ contentCardImage }>
            <GatsbyImage image={ getImage( img ) } alt={ alt } />
          </div>
          <Section>
            <div>
            { MDX(content) }
            </div>
          </Section>
        </article>
        <div className={ contentEnd }>
          <hr role="none" className={ contentEndBlurHr }/>
          <span className={ contentEndButtonWrapper }>
            <Button onClick={ showContentHandler } innerText={ btnText }>Continue Reading</Button>
          </span>
        <hr role="none" className={ contentEndFinalHr }/>
        </div>
      </div>
    );
}

////** PROP TYPES **////
ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
}

export default ContentCard;