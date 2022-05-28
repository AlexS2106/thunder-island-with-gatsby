import React from "react";
import PropTypes from "prop-types";

import MDX from "../../providers/MDX";

import {
  profile
} from "./Profile.module.css";

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
    <article className={ `bgLight flexColumn ${profile}` }>
      <h3 className="textCenter shadowText">{ title }</h3>
      { contentBody }
    </article>
  );
}

////** PROP TYPES **////
Profile.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Profile;