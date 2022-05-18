import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { 
  p,
  ingredients,
  instructions,
  recipeBody,
  authorBody,
  healthBody,
  poemBody,
  reviewBody,
  writingBody
} from "./MDX.module.css"

import Button from "../components/buttons/Button";
import Spacer from "../components/layout/Spacer";


export default function MDX ( body ) {

  const paragraphs = props => (
    <p className={ p } { ...props } />
  );
  
  const Ingredients = ( { children, ...props } ) => (
    <div className={ ingredients } { ...props }>
      { children }
    </div>
  );

  const Instructions = ( { children, ...props } ) => (
    <div className={ instructions } { ...props }>
      { children }
    </div>
  );
  
  const RecipeBody = ( { children, ...props } ) => {
    const [ show, setShow ] = useState(false)
    return (
      <div className={ recipeBody } { ...props }>
        <Button onClick={ () => show ? setShow( false ) : setShow( true ) } innerText="Read the full post?" style={ { margin: "auto" } } />
        <Spacer size="small" />
        { show ? children : null }
      </div>
    );
  };
  
    const AuthorBody = ( { children, ...props } ) => {
    return (
      <div className={ authorBody } { ...props }>
        { children }
      </div>
    );
  };

  const HealthBody = ( { children, ...props } ) => {
    return (
      <div className={ healthBody } { ...props }>
        { children }
      </div>
    );
  };

  const PoemBody = ( { children, ...props } ) => {
    return (
      <div className={ poemBody } { ...props }>
        { children }
      </div>
    );
  };
  
  const ReviewBody = ( { children, ...props } ) => {
    return (
      <div className={ reviewBody } { ...props }>
        { children }
      </div>
    );
  };

  const WritingBody = ( { children, ...props } ) => {
    return (
      <div className={ writingBody } { ...props }>
        { children }
      </div>
    );
  };


  const components = {
    p: paragraphs,
    Ingredients,
    Instructions,
    RecipeBody,
    HealthBody,
    PoemBody,
    WritingBody,
    ReviewBody,
    AuthorBody
  };
  
  return (
    <MDXProvider components={ components }>
      <MDXRenderer>{ body }</MDXRenderer>
    </MDXProvider>
  );
}

MDX.propTypes = {
  body: PropTypes.object,
};

