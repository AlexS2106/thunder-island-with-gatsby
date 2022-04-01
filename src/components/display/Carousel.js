import React from "react";

import {
  carousel,
} from "./Carousel.module.css";

import PostSmall from "../posts/PostSmall";


const Carousel = ( { carouselData, ...props } ) => {

  //Component
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
  
  return (
      <div className={ carousel }>
        { generateCarousel }
      </div>
  );
}

export default Carousel;