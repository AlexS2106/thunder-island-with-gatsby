import React from "react";
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

const AboutPage = ( { data, pageContext } ) => {

  //Data
  const { authors, posts } = data;
  
  //Component
  const pageTitle = "About";
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const generateAside = posts.edges.map( ( item ) => (
    <div key={ uuidv4() }>
      <PostSmall post={ item.node } innerText="Read More" />
      <Spacer size="small" />
    </div>
  ) );
  const generateProfiles = authors.edges.map( ( author ) => (
    <Profile person={ author } key={ uuidv4() } ></Profile>
  ) );
  
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
