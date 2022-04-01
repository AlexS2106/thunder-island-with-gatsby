import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  profile
} from "./Profile.module.css";

import MDX from "../../providers/MDX";

const Profile = ( { person } ) => {
  
  //Data
  const { frontmatter, body } = person.node;
  const { title, portraitImage, alt } = frontmatter;

  //Component
  const contentBody = MDX( body );

  return (
    <article className={ profile }>
      <h3>{ title }</h3>
      <div>
        <GatsbyImage image={ getImage( portraitImage ) } alt={ alt } ></GatsbyImage>
      </div>
      { contentBody }
    </article>
  );
}

Profile.propTypes = {
  person: PropTypes.object,
}

export default Profile;