import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  associatedPostListWrapper,
  associatedPostWrapper
} from "./AssociatedPostList.module.css";

import Spacer from "../layout/Spacer";
import PostMedium from "../posts/PostMedium";

////** COMPONENT **////
const AssociatedPostList = ( { postData } ) => {

////** MARK UP **////
  return (
    <div className={ associatedPostListWrapper }>
      { postData.map( ( item ) => {
        return (
          <div key={ uuidv4() } className={ associatedPostWrapper }>
            <PostMedium
              showDate
              showAuthor
              hasPhotographer
              showSubCategories
              post={ item }
              innerText="Continue..." />
            <Spacer size="small" />
          </div>
        )
      } ) }
    </div>
  );
}

export default AssociatedPostList;