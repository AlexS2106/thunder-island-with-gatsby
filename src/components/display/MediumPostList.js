import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import {
  mediumPostList
} from "./MediumPostList.module.css";

import Spacer from "../layout/Spacer";
import PostMedium from "../posts/PostMedium";

////** COMPONENT **////
const MediumPostList = ( { postData, ...props } ) =>
{
////** FUNCTIONS **////
  const generateMediumPostList = postData.map( ( item ) => (
    <div key={ uuidv4() } >
      <PostMedium
        post={ item }
        { ...props }
      />
      <Spacer size="small" />
    </div>
  ) );
////** MARK UP **////
  return (
    <div className={ ` flexColumn bgLight ${ mediumPostList }` }>
      { generateMediumPostList }
    </div>
  );
}

////** PROP TYPES **////
MediumPostList.propTypes = {
  postData: PropTypes.array.isRequired,
}

export default MediumPostList;