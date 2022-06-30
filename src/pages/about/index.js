import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import {
  about,
  justify
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Layout from "../../components/layout/containers/Layout";
import PageTitle from "../../components/typography/PageTitle";
import Profile from "../../components/posts/Profile";
import Signature from "../../components/typography/Signature";
import SmallPostList from "../../components/display/postLists/SmallPostList";
import Spacer from "../../components/layout/spacing/Spacer";

import useGetAllPosts from "../../queries/useGetAllPosts.query";

import { filterList } from "../../utilities/functions";
import { recommendedPosts } from "../../utilities/indices";


////** COMPONENT **////
const AboutPage = ( { data, pageContext } ) => {
  const postNodes = useGetAllPosts();
  ////** CONTEXT **////
   const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking imported data
  const { mdx } = data;
  //PageTitle
  const pageTitle = "About";
  //Aside -> SmallPostList -> Button innertext
  const asidePostsButtonText = "Read More";

  ////** FUNCTIONS **////
  //Make a node array of recommended posts from an imported list in indices
  const nodes = filterList( recommendedPosts, postNodes );

    ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ about }>
        <main className="bgLight">
          <Profile person={ mdx } />
          <Signature signedBy="alex" rotate />
        </main>
        <div className={ `flexColumn ${justify}` }>
          <aside className="flexColumn bgLight sideBorderDark">
            <header className="pad1 bgLight textCenter">
              <h3 className="shadowText">Recommended Posts</h3>
              <address rel="author" className="shadowText" >by Alex</address>
            </header>
            <SmallPostList
              postData={ nodes }
              innerText={ asidePostsButtonText }
            />
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
query author {
  mdx(frontmatter: {type: {eq: "profile"}}) {
    frontmatter {
      title
      slug
      author
    }
    body
  }
}
`;
