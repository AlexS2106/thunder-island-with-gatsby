import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  search,
  searchForm,
  searchDropdown
} from "./Search.module.css";

import useGetAllSlugs from "../../queries/useGetAllSlugs.query";
import { makeTitle } from "../../utilities/functions";

////** COMPONENT **////
const Search = () => {

  ////** STATE **////
  //Initial state for the index.
  const nodes = useGetAllSlugs();
  const slugs = nodes.map(node => node.frontmatter.mainCategories[0].concat("/", node.slug));
  //State for the index and user query
  const [ index, setIndex ] = useState( () => {
     const initialState = slugs;
  return initialState;
});
  const [ query, setQuery ] = useState( "" );
  //State for making the dropdown to show the serch results
  const [ dropdown, setDropdown ] = useState( [] );
  const [ show, setShow ] = useState( false );
  //Component did mount state for dropdown - will only alter if dropdown state alters
  useEffect( () => {
    dropdown.length !== 0 ? setShow( true ) : setShow(false)
  }, [dropdown] )

  ////** FUNCTIONS **////
  //Manages events on user input
  const handleChange = ( e ) => { 
    setQuery( e.target.value );
    if ( e.target.value.length > 2 ) { 
      const regExp = new RegExp( e.target.value.replaceAll( " ", "-" ) );
      const list = index.filter( i => i.match( regExp ) );
      setDropdown( list );
    } 
    if ( e.target.value.length <= 2 ) { 
      setDropdown( [] );
    } 
  }
//Manages events on user submit (enter press)
 const handleSubmit = (e) => { 
    e.preventDefault(); 
  }

  ////** MARK UP **////
  return (
    <div className={ search }>
      <form className={ searchForm } onSubmit={ handleSubmit }>
        <label htmlFor="query" />
        <input
          type="text"
          id="query"
          placeholder="Search"
          value={ query }
          onChange={ handleChange }
          />
      </form>
      <div style={ show ? { display: "flex", position: "fixed" } : { display: "none" } }>
        <ul className={ `flexColumn ${searchDropdown}` }>
            {
              dropdown.map( item =>
                <Link key={ uuidv4() } to={ `/${ item }` } >
                  { makeTitle( item.slice(item.indexOf("/")) ) }</Link> )
            }
          </ul>
      </div>
    </div>
  );
}
 
export default Search;
 

