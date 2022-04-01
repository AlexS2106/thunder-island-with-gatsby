import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { 
  p,
  ingredients,
  instructions,
  postBody
} from "./MDX.module.css"


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
  

  const PostBody = ( { children, ...props } ) => {
    const [ show, setShow ] = useState(false)
    return (
      <div className={ postBody } { ...props }>
        <button onClick={ () => show ? setShow(false) : setShow(true) }>Read Full Post?</button>
        { show ? children : null }
      </div>
    );
};



  const components = {
    p: paragraphs,
    Ingredients,
    Instructions,
    PostBody
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

