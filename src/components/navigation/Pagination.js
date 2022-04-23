import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  pagination,
  paginationLi,
  paginationArrow
} from "./Pagination.module.css";

import { doubleArrowRight, doubleArrowLeft } from "../../utilities/iconFunctions";

////** COMPONENT **////
const Pagination = ( { pageInfo } ) => {

  ////** VARIABLES **////
  //Unpacking imported data
  const { pageCount, currentPage } = pageInfo;

  ////** FUNCTIONS **////
  //Creates li list with numbers for the pages, each one is a clickable link to the page of that number. (via props.pageinfo.pageCount)
  const paginationArray = Array.from( { length: pageCount }, ( _, index ) => {
    return (
      <li key={ uuidv4() } className={ paginationLi } >
        <Link to={ index === 0 ? `/` : `/${ index + 1 }` } > { index + 1 } </Link>
      </li>
    );
  } );
  //Takes the entire page list (via paginationArray in FUNCTIONS) and chops it into smaller parts, it will show the current page plus one on either side and clickable arrows
  const paginationList = paginationArray.map( ( listItem, index ) => {
    const num = index + 1;
    return (
      num < currentPage + 2 && num > currentPage - 2 ? listItem
        : num === currentPage + 3 ? <li key={ uuidv4() } className={ paginationArrow }><Link to={ `/${ index + 1 }` } > { doubleArrowRight() }</Link></li>
          : num === currentPage - 3 ? <li key={ uuidv4() } className={ paginationArrow }><Link to={ `/${ index + 1 }` } >{ doubleArrowLeft() }</Link></li>
                : null
    );
  } );

  ////** MARK UP **////
  return (
    <nav className={ pagination }>
      <ul>
        { paginationList }
      </ul>
    </nav>
  );
}
////** PROP TYPES **////
Pagination.propTypes = {
  pageInfo: PropTypes.object.isRequired,
}

export default Pagination;