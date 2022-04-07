import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  search,
  searchForm,
  searchDropdown
} from "./Search.module.css";

import useAllPostsList from "../../queries/useAllPostsList.query";

import { makeTitle } from "../../utilities/functions";


const Search = () => {

  const { nodes } = useAllPostsList();
  const slugs = nodes.map(node => node.slug);

  const [ index, setIndex ] = useState( () => {
     const initialState = slugs;
  return initialState;
});
  const [ query, setQuery ] = useState( "" );
  const [ dropdown, setDropdown ] = useState( [] );
  const [ show, setShow ] = useState( false );

  useEffect( () => {
    dropdown.length !== 0 ? setShow( true ) : setShow(false)
  }, [dropdown] )

  function handleChange ( e ) { 
    setQuery( e.target.value );
    if ( query.length > 2 ) { 
      const regExp = new RegExp( query.replaceAll( " ", "-" ) );
      const list = index.filter( i => i.match( regExp ) );
      setDropdown( list );
    } 
    if ( query.length <= 2 ) { 
      setDropdown( [] );
    } 
  }

  function handleSubmit (e) { 
    e.preventDefault(); 
  }

  return (
    <div className={ search }>
      <form className={ searchForm } onSubmit={ handleSubmit }>
        <label htmlFor="query" />
        <input
          type="text"
          id="query"
          placeholder="To be done!"
          value={ query }
          onChange={ handleChange }
        />
      </form>
      <div style={ show ? { display: "flex", position: "fixed" } : { display: "none" } }>
        <ul className={ searchDropdown }>
            {
              dropdown.map( item =>
                <Link key={ uuidv4() } to={ `/${ item }` } >
                  { makeTitle( item ) }</Link> )
            }
          </ul>
      </div>
    </div>
  );
}

 
export default Search;
 

