import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";

import {
  grid,
  withBorder
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Carousel from "../components/display/Carousel";
import Column from "../components/layout/Column";
import ExcerptList from "../components/display/ExcerptList";
import Layout from "../components/layout/Layout";
import MediumPostList from "../components/display/MediumPostList";
import MenuInBoxes from "../components/navigation/MenuInBoxes";
import Pagination from "../components/navigation/Pagination";
import Section from "../components/layout/Section";
import SmallPostList from "../components/display/SmallPostList";
import Spacer from "../components/layout/Spacer";

import { useGetPostSelection } from "../queries/useGetPostSelection.query";
import { healthImg, recipesImg, maltaBoatsImg, writingImg, pathImg } from "../utilities/staticImgFunctions";


const IndexPage = ( { data, pageContext } ) => {
  ////////// *** STATE *** /////////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ///////// *** VARIABLES *** ///////////
  ////Unpacking data
  const { allPostsList } = data;
  const allPosts = allPostsList.nodes;
  const { recipePost, reviewPost, healthPost, expatPost, poemPost, storyPost } = useGetPostSelection();
    ////For the menuBoxes 
  const menuBoxesMenuArray = [
    {
      link: "/recipes",
      name: "Recipes",
      image: recipesImg(),

    },
    {
      link: "/health",
      name: "Health",
      image: healthImg(),
    },
    {
      link: "/expats-in-malta",
      name: "Expats In Malta",
      image: maltaBoatsImg(),
    },
    {
      link: "/writing",
      name: "Writing",
      image: writingImg(),
    },
    {
      link: "/virtual-how",
      name: "Virtual How",
      image: pathImg(),
    },
  ];
  ////for the ExcerptList -> PostMedium
  const excerptListPosts = [ recipePost, reviewPost,  healthPost, expatPost, poemPost, storyPost ];
  const excerptListInnerText = "Read More";
  const excerptLength = 75;
  ////For the MediumPostList -> PostMedium
  const mainData = allPosts;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const mediumPostExcerptLength = 150;
  ////For the SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const sideData = allPosts;
  ////For the Carousel -> PostSmall
  const carouselData = allPosts;
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts";
  ////For Pagination
  const pageLink = "";
  const pageInfo = allPostsList.pageInfo;
  ///////// *** FUNCTIONS *** ///////////
  const handleMenuBoxClick = ( e ) => { 
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    navigate( `${ clickedTemp[ 0 ].link }` );
   }

  ///////// *** COMPONENT *** ///////////
  return (
    <Layout>
      <Spacer size="large" />
      <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
          />
      <Spacer size="large" />
      <Column>
        {
          pageContext.currentPage === 1 ?
        <Section direction="column">
          <header>
            <h3>All My Latest Posts</h3>
          </header>
          <Spacer size="small" />
          <ExcerptList
            list={ excerptListPosts }
            innerText={ excerptListInnerText }
            excerptLength={ excerptLength }
          />
            </Section>
            : null
        }
      </Column>
      <Spacer size="large" />
      <Column>
      <Section direction="column">
        <header>
          <h3>Latest posts</h3>
        </header>
        <Spacer size="small" />
          { pageContext.currentPage !== 1 ?
            <>
              <Breadcrumbs crumbs={ crumbs } />
              <Spacer size="small" />
            </>
            : null }
        <div className={ grid }>
          <main>
            <MediumPostList
              postData={ mainData }
              excerptLength={ mediumPostExcerptLength }
              showDate={ showDate }
              showAuthor={ showAuthor }
              hasPhotographer={ hasPhotographer }
              showSubCategories={ showSubcategories }
              innerText={ mainPostsInnerText }
            />
          </main>
            <aside>
              <div className={ withBorder }>
                <header>
                  <h3>Popular Posts</h3>
                </header>
                <SmallPostList
                  postData={ sideData }
                  innerText={ asidePostsInnerText }
                />
              </div>
            </aside>
        </div>
      </Section>
      <Pagination
        pageLink={ pageLink }
        pageInfo={ pageInfo }
      />
      <Spacer size="medium" />
      </Column>
      <Section direction="column">
        <header>
          <h3>{ carouselTitle }</h3>
        </header>
        <Spacer size="small" />
        <Carousel
          title={ carouselTitle }
          carouselData={ carouselData }
          innerText={ carouselPostsInnerText }
        />
      </Section >
      
    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default IndexPage;

///////// *** PAGE QUERY *** ///////////
export const data = graphql`
query ($limit: Int!, $skip: Int!) {
  allPostsList: allMdx(
    limit: $limit
    filter: {frontmatter: {type: {eq: "post", nin: "profile"}}}
    skip: $skip
    sort: {fields: frontmatter___updated, order: DESC}
  ) {
    nodes {
      id
      frontmatter {
        title
        type
        slug
        mainCategories
        subcategories
        by_course
        by_ingredient
        by_diet
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
        photographer
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

