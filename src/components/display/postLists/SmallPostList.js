import React from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  smallPostList
} from "./SmallPostList.module.css";

import PostSmall from "../../posts/PostSmall";
import Spacer from "../../layout/spacing/Spacer";


////** COMPONENT **////
const SmallPostList = ( { postData, ...props } ) => {

    ////** MARK UP **////
  return (
    <div className={ ` flexColumn bgLight ${smallPostList}` }>
      { postData.map( ( item, index ) => (
        <div key={ index }>
          <PostSmall post={ item } { ...props }/>
          <Spacer key={ uuidv4() } size="small" />
        </div>
      ) ) }
    </div>
  );
  
}

export default SmallPostList;