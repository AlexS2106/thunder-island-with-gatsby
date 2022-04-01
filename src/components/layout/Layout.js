import React from "react";

import "../../utilities/globalStyles.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navigation/Navbar";
import Spacer from "../layout/Spacer";



const Layout = ( { ...props } ) => {

  return (
    <>
      <Navbar />
      <Header />
      { props.children }
      <Spacer size="small" />
      <Footer />
    </>
  );
}

export default Layout;