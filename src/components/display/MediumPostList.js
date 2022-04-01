import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  mediumPostList
} from "./MediumPostList.module.css";

import Spacer from "../layout/Spacer";
import PostMedium from "../posts/PostMedium";


const MediumPostList = ( { postData, ...props } ) => {

  return (
    <div className={ mediumPostList }>
      { postData.map( ( item ) => (
        <div key={ uuidv4() } >
          <PostMedium
            post={ item }
            {...props}
          />
          <Spacer size="small" />
        </div>
      ) ) }
    </div>
  );
}

export default MediumPostList;