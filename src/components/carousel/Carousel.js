import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  carouselStyling,
  carousel,
  carouselTitle,
  carouselMove
} from "./Carousel.module.css";

import PostSmall from "../posts/PostSmall";

import { singleArrowLeft, singleArrowRight } from "../../utilities/iconFunctions";

////** COMPONENT **////
const Carousel = ( { carouselData, ...props } ) => {

////** STATE **////
  const [ move, setMove ] = useState( 0 );

////** FUNCTIONS **////
//Generates the carousel posts
  const generateCarousel =
    carouselData.map( ( item ) =>
    ( <PostSmall key={ uuidv4() }
          post={ item }
          addedClasses="withSideBorder"
          { ...props }
    /> ) );
  //Acts on a user clicking to move the carousel left or right
  const clickHandler = ( value ) => { 
    if ( value === "increment" ) {
      move >= (carouselData * 33) ? setMove( carouselData * 33 ) : setMove(move + 33)
    } else if ( value === "decrement" ) { 
      move - 33 < 0 ? setMove( 0 ) : setMove( move - 33 );
    }
  }
   
  ////** MARK UP **////
  return (
    <div className={ carouselStyling } >
      <div className={ carouselTitle }>
        { move !== 0 ? <button onClick={ () => clickHandler("decrement") }><span className={ carouselMove }>{ singleArrowLeft() }</span></button> : null }
        <h3>{ props.title }</h3>
        { move < ((carouselData.length * 33) / (carouselData.length / 2)) ? <button onClick={ () => clickHandler("increment") }><span className={ carouselMove }>{ singleArrowRight() }</span></button> : null }
      </div>
      <div className={ carousel } style={ { width: `${ carouselData.length * 33 }vw`, transform: `translateX( -${ move }vw )` } }>
        { generateCarousel }
      </div>
    </div>
  );
}

  ////** MARK UP **////
Carousel.propTypes = {
  carouselData: PropTypes.array.isRequired,
  innerText: PropTypes.string
}

export default Carousel;