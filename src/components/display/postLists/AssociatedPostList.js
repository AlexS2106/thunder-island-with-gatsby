import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  associatedPostList
} from "./AssociatedPostList.module.css";

import Spacer from "../../layout/spacing/Spacer";
import PostMedium from "../../posts/PostMedium";

////** COMPONENT **////
const AssociatedPostList = ( { postData } ) => {

////** MARK UP **////
  return (
    <div className={ `flexColumn bgLight ${associatedPostList}` }>
      { postData.map( ( item ) => {
        return (
          <div key={ uuidv4() } className="bgLight">
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