import React from "react";
import { graphql } from "gatsby";

import {
  grid,
  asideWrapper
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";

import Carousel from "../../components/display/Carousel";
import Layout from "../../components/layout/Layout";
import MediumPostList from "../../components/display/MediumPostList";
import PageTitle from "../../components/header/PageTitle";
import Pagination from "../../components/navigation/Pagination";
import SmallPostList from "../../components/display/SmallPostList";
import Spacer from "../../components/layout/Spacer";


const HealthPage = ( { data, pageContext } ) => {

  //Data
  const mainData = data.allMdx.nodes;
  const sideData = data.allMdx.nodes;
  const carouselData = data.allMdx.nodes;
  const pageInfo = data.allMdx.pageInfo;

  //3rd party
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  //Component
  const pageTitle = "Health";
  const pageLink = "health";

   ////For the MediumPostList -> PostMedium
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;

  ////For the SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";

  ////For the Carousel -> PostSmall
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts"
  
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ grid }>
        <main>
          <MediumPostList
            postData={ mainData }
            excerptLength={ excerptLength }
            showDate={ showDate }
            showAuthor={ showAuthor }
            hasPhotographer={ hasPhotographer }
            showSubCategories={ showSubcategories }
            innerText={ mainPostsInnerText }
          />
        </main>
        <div className={ asideWrapper }>
          <aside>
            <header>
              <h3>Popular Posts</h3>
            </header>
            <SmallPostList
              postData={ sideData }
              innerText={ asidePostsInnerText }
            />
          </aside>
        </div>
      </div>
      <Pagination
        pageLink={ pageLink }
        pageInfo={ pageInfo }
      />
      <Spacer size="medium" />
      <Carousel
        title={ carouselTitle }
        carouselData={ carouselData }
        innerText={ carouselPostsInnerText }
      />
    </Layout>
  );
}

export const data = graphql`
query allHealthList {
  allMdx(
    filter: {frontmatter: {mainCategories: {eq: "health"}}}
    ) {
    nodes {
      id
      frontmatter {
        title
        type
        slug
        mainCategories
        subcategories
        posted
        updated
        author
        portraitImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        landscapeImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        alt
        associated
        excerpt
      }
    }
    pageInfo {
      currentPage
      hasNextPage
      hasPreviousPage
      pageCount
    }
  }
}
`;

export default HealthPage;