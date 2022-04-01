import React from "react";

import {
  column
} from "./Column.module.css";


const SingleColumn = ( { children }) => {
  return (
    <main className={ column }>
      { children }
    </main>
  );
}

export default SingleColumn;