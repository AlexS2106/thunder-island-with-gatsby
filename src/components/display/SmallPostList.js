import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  smallPostList
} from "./SmallPostList.module.css";

import PostSmall from "../posts/PostSmall";
import Spacer from "../layout/Spacer";


const SmallPostList = ( { postData, ...props } ) => {

  return (
    <div className={ smallPostList }>
      { postData.map( ( item, index ) => (
        <div key={ index }>
          <PostSmall
            post={ item } classes="withBackground"
            { ...props }
          />
          <Spacer key={ uuidv4() } size="small" />
        </div>
      ) ) }
    </div>
  );
  
}

export default SmallPostList;