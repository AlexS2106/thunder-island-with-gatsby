import React from "react";

import {
  footer,
  imageWrapper,
  credits,
  subcredits
} from "./Footer.module.css";

import useMetadata from "../../queries/useMetadata.query";
import { smallLogo } from "../../utilities/staticImgFunctions";

const Footer = () => {

  const { title, author, stack, stackTech } = useMetadata();
  const logo = smallLogo();

  return (
    <footer className={ footer }>
      <div className={ imageWrapper }>
        { logo }
      </div>
       
      <div className={ credits }>
        <p>@Copyright { title } { new Date().getFullYear() }</p>
        <div className={ subcredits }>
        <div>
          <p>A { stack } Website</p>
          <p>{ stackTech.map( ( tech, index ) => index === stackTech.length - 1 ? `with ${ tech }` : `${ tech }, ` ) }</p>
        </div>
        <div>
          <p>Logo Design</p>
          <p>by Claire Murray</p>
          <address>@ClairesWebsite</address>
        </div>
        <div>
            <p>All the design, coding and content of Thunder Island is the result of the interests, hobbies and dabblings of { author }.</p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;