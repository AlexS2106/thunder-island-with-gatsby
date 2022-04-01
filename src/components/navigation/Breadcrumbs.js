import React, { useContext } from "react";
import { navigate } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  breadcrumbs,
  isActive
} from "./Breadcrumbs.module.css";

import { makeTitle } from "../../utilities/functions";
import { singleArrowRight } from "../../utilities/iconFunctions";
import { topLevelPages } from "../../utilities/indices";
import { DispatchContext, StateContext } from "../../providers/ContextProvider";


const Breadcrumb = ( { crumbs } ) => {
//3rd party
  const dispatch = useContext( DispatchContext );
  const state = useContext( StateContext );

//Component
  const generateBreadcrumbs = crumbs.map( ( crumb ) => {
    return (
      crumb.crumbLabel !== "Home" ?
          <button
            key={ uuidv4() }
            className={ state.views.includes( crumb ) ? isActive : null }
            onClick={ () => {
              if ( !crumb.crumbLabel.includes( topLevelPages ) ) {
                dispatch( { type: "toggle_views", payload: crumb.crumbLabel } )
              }
              navigate( crumb.pathname )
            } }
          >
            { singleArrowRight() }
            <span>{ makeTitle( crumb.crumbLabel ) }</span>
        </button>
        : null
    );
  } );

  return (
    <nav className={ breadcrumbs }>
      <div>
        { generateBreadcrumbs }
      </div>
    </nav>
    
        
  );
}

export default Breadcrumb;