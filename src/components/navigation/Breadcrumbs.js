import React, { useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  breadcrumbs,
} from "./Breadcrumbs.module.css";

import { makeTitle } from "../../utilities/functions";
import { singleArrowRight } from "../../utilities/iconFunctions";
import { topLevelPages } from "../../utilities/indices";
import { DispatchContext, StateContext } from "../../providers/ContextProvider";


////** COMPONENT **////
const Breadcrumbs = ( { crumbs } ) => {

////** CONTEXT **////
  const dispatch = useContext( DispatchContext );
  const state = useContext( StateContext );

  ////** FUNCTIONS **////
  //Generates the breadcrumbs and arrows, manages clickable navigation paths.  (via props.crumbs)
  const generateBreadcrumbs = crumbs.map( ( crumb ) => {
    return (
      crumb.crumbLabel !== "Home" ?
          <button
            key={ uuidv4() }
            className={ state.views.includes( crumb ) ? "isActive" : null }
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

  ////** MARK UP **//// 
  return (
    <nav className={ `flexRow ${breadcrumbs}` }>
      <div>
        { generateBreadcrumbs }
      </div>
    </nav> 
  );
}

////** PROP TYPES **////
Breadcrumbs.propTypes = {
  crumbs: PropTypes.array.isRequired,
}

export default Breadcrumbs;