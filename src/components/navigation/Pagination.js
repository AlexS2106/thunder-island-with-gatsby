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


const Pagination = ( { pageInfo } ) => {

  //Data
  const { pageCount, currentPage } = pageInfo;

  //Component
  const paginationArray = Array.from( { length: pageCount }, ( _, index ) => {
    return (
      <li key={ uuidv4() } className={ paginationLi } >
        <Link to={ index === 0 ? `/` : `/${ index + 1 }` } > { index + 1 } </Link>
      </li>
    );
  } );
  
  const paginationList = paginationArray.map( ( listItem, index ) => {
    const num = index + 1;
    return (
      num < currentPage + 2 && num > currentPage - 2 ? listItem
        : num === currentPage + 3 ? <li key={ uuidv4() } className={ paginationArrow }><Link to={ `/${ index + 1 }` } > { doubleArrowRight() }</Link></li>
          : num === currentPage - 3 ? <li key={ uuidv4() } className={ paginationArrow }><Link to={ `/${ index + 1 }` } >{ doubleArrowLeft() }</Link></li>
                : null
    );
  } );

  return (
    <nav className={ pagination }>
      <ul>
        { paginationList }
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  pageInfo: PropTypes.object,
  pageLink: PropTypes.string,
}

export default Pagination;