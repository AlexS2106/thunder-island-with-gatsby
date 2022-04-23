import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  asideWrapper,
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/header/PageTitle";
import PostSmall from "../../components/posts/PostSmall";
import Profile from "../../components/posts/Profile";
import Spacer from "../../components/layout/Spacer";


////** COMPONENT **////
const AboutPage = ( { data, pageContext } ) => {

    ////** CONTEXT **////
   const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking imported data
  const { authors, posts } = data;
  //PageTitle
  const pageTitle = "About";

  ////** FUNCTIONS **////
  //Generates random posts by a chosen author in the aside (an array of posts passed in as props.data.posts by the page query)
  const generateAside = posts.edges.map( ( item ) => (
    <div key={ uuidv4() }>
      <PostSmall post={ item.node } innerText="Read More" />
      <Spacer size="small" />
    </div>
  ) );
  //Generates a list of profiles in the main column (an array of authors passed in as props.data.authors by the page query)
  const generateProfiles = authors.edges.map( ( author ) => (
    <Profile person={ author } key={ uuidv4() } ></Profile>
  ) );

    ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ grid }>
        <main>
          { generateProfiles }
        </main>
        <div className={ asideWrapper }>
          <aside>
            <header>
              <h3>Popular Posts</h3>
              <address rel="author">by Alex </address>
            </header>
            { generateAside }
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;

////** PROP TYPES **////
AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

////** PAGE QUERY **////
export const data = graphql`
query getAuthorPosts {
  authors: allMdx(filter: {frontmatter: {type: {eq: "profile"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        body
      }
    }
  }
  posts: allMdx(
    limit: 4
    filter: {frontmatter: {author: {eq: "alex"}, type: {ne: "profile"}}}
    skip: 2
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          author
          landscapeImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
    }
  }
}
`;
