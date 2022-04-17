import React from "react";

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
          addedClasses="withBorder"
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

export default Carousel;