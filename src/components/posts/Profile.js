import React from "react";
import PropTypes from "prop-types";

import {
  profile
} from "./Profile.module.css";

import MDX from "../../providers/MDX";


////** COMPONENT **////
const Profile = ( { person } ) => {
  
  ////** VARIABLES **////
  //Unpacking imported data
  const { frontmatter, body } = person;
  const { title } = frontmatter;

  //Parses the mdx for the contentbody (via props.person.body)
  const contentBody = MDX( body );

  ////** MARK UP **////
  return (
    <article className={ profile }>
      <h3>{ title }</h3>
      { contentBody }
    </article>
  );
}

////** PROP TYPES **////
Profile.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Profile;