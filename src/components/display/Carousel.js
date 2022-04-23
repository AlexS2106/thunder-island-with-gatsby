import React from "react";
import PropTypes from "prop-types";

import {
  carousel,
} from "./Carousel.module.css";

import PostSmall from "../posts/PostSmall";

////** COMPONENT **////
const Carousel = ( { carouselData, ...props } ) => {

////** FUNCTIONS **////
//Generates the carousel posts
  const generateCarousel =
    carouselData.slice( 0, 3 ).map( ( item, index ) =>
    (
      <div key={ index }>
        <PostSmall
          post={ item }
          addedClasses="withSideBorder"
          { ...props }
        />
      </div>
    ) );
  
  ////** MARK UP **////
  return (
      <div className={ carousel }>
        { generateCarousel }
      </div>
  );
}

  ////** MARK UP **////
Carousel.propTypes = {
  carouselData: PropTypes.array.isRequired,
  innerText: PropTypes.string
}

export default Carousel;