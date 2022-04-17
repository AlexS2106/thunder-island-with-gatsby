import React from "react";
import PropTypes from "prop-types";

import "../../utilities/globalStyles.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navigation/Navbar";
import Spacer from "../layout/Spacer";

////** COMPONENT **////
const Layout = ( { ...props } ) => {

////** MARK UP **////  
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

///////// *** PROP TYPES *** ///////////
Layout.propTypes = {
  children: PropTypes.oneOfType( [
    PropTypes.node,
    PropTypes.array,
    PropTypes.element
  ] ).isRequired,
}

export default Layout;