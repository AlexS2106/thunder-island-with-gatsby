import React from "react";

import { 
  pageTitleStyling
} from "./PageTitle.module.css";

const PageTitle = ( { title } ) => { 
  return (
    <header>
      <h2 className={ pageTitleStyling }>
        { title }
      </h2>
    </header>
  );
}

export default PageTitle;