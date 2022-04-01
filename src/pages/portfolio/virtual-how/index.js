import React from "react";

import Layout from "../../../components/layout/Layout";

import { pathImg } from "../../../utilities/staticImgFunctions";

const VirtualHowPage = () => {

  const hero = pathImg();

  return (
    <Layout>
      { hero }
      <header>
        <h1>Thunder Island Virtual How</h1>
     </header>
      <h2>A simpler path to follow.</h2>
    
      
    </Layout>
  );
}

export default VirtualHowPage;
