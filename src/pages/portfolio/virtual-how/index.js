import React from "react";

import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/footer/Footer";

import { virtualHeroImg } from "../../../utilities/staticImgFunctions";


const VirtualHowPage = () => {

  const hero = virtualHeroImg();
  return (
    <>
      <Navbar />
      { hero }
      <header>
        <h1>Thunder Island Virtual How</h1>
      </header>
      <h2>A simpler path to follow.</h2>
      <Footer />
    </>
  );
}

export default VirtualHowPage;
