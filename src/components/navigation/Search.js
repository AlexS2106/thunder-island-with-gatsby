import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  search,
  searchForm,
  searchDropdown
} from "./Search.module.css";

import { makeTitle } from "../../utilities/functions";

const Search = () => {
  
  // const [ index, setIndex ] = useState( [] );
  // const [ query, setQuery ] = useState( "" );
  // const [ dropdown, setDropdown ] = useState( [] );



  function handleChange (e) { 
   //handleChnage here
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
          //value={ query }
          onChange={ handleChange }
        />
      </form>
      {/* Implement after query problem sorted
      { dropdown.length ?
        <div className={ searchDropdown } >
          <ul>
            {
              dropdown.map( item =>
                <Link key={ uuidv4() } to={ `/${ item }` } >
                  { makeTitle( item ) }</Link>)
            }
          </ul>
        </div> : null } */}
    </div>
  );

}

 
 export default Search;