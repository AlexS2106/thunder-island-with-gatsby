import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";

import {
  grid,
  intro,
  greeting,
  welcome
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Carousel from "../components/display/Carousel";
import DivColumn from "../components/layout/DivColumn";
import ExcerptList from "../components/display/ExcerptList";
import Layout from "../components/layout/Layout";
import MainColumn from "../components/layout/MainColumn";
import MediumPostList from "../components/display/MediumPostList";
import MenuInBoxes from "../components/navigation/MenuInBoxes";
import Pagination from "../components/navigation/Pagination";
import Section from "../components/layout/Section";
import Spacer from "../components/layout/Spacer";

import { useGetPostSelection } from "../queries/useGetPostSelection.query";
import { healthImg, recipesImg, maltaBoatsImg, writingImg, pathImg, booksImg, authorRightImg } from "../utilities/staticImgFunctions";


////** COMPONENT **////
const IndexPage = ( { data, pageContext } ) => {

  ////** CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const { allPostsList } = data;
  const allPosts = allPostsList.nodes;
  const { recipePost, reviewPost, healthPost, expatPost, writingPost, englishPost } = useGetPostSelection();
  //MenuBoxes (images displayed, button innertext, links)
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
      link: "/portfolios",
      name: "Expats In Malta",
      image: maltaBoatsImg(),
    },
    {
      link: "/portfolios",
      name: "Writing",
      image: writingImg(),
    },
    {
      link: "/portfolios",
      name: "Poems",
      image: pathImg(),
    },
    {
      link: "/english",
      name: "Learn English",
      image: booksImg(),
    },
  ];
  //ExcerptList -> PostMedium
  const excerptListPosts = [ recipePost, expatPost,  healthPost, reviewPost, writingPost, englishPost ];
  const excerptListInnerText = "Read More";
  const excerptLength = 75;
  //MediumPostList -> PostMedium
  const mainData = allPosts;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const mediumPostExcerptLength = 150;
  //AsideContent
  const image = authorRightImg();
  //Pagination
  const pageLink = "";
  const pageInfo = allPostsList.pageInfo; 
  //Carousel -> PostSmall
  const carouselData = allPosts;
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts";

  ////** FUNCTIONS **////
  //Manages menu selection clicks in menuboxes
  const handleMenuBoxClick = ( e ) => { 
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    navigate( `${ clickedTemp[ 0 ].link }` );
  }
  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <DivColumn>
        <MenuInBoxes
          menu={ menuBoxesMenuArray }
          onClick={ handleMenuBoxClick }
        />
        <Spacer size="small" />
        {
          pageContext.currentPage === 1 ?
            <>
              <Section>
                <h3 className="addPaddingLeft5">All My Latest Posts</h3>
                <Spacer size="small" />
                <ExcerptList
                  list={ excerptListPosts }
                  innerText={ excerptListInnerText }
                  excerptLength={ excerptLength }
                />
              </Section>
              <Spacer size="large" />
            </>
            : null
        }
        <div className={ grid }>
          <MainColumn>
            <h3 style={ { marginLeft: "10%" } }>Latest posts</h3>
            <Spacer size="small" />
            { pageContext.currentPage !== 1 ?
              <>
                <Breadcrumbs crumbs={ crumbs } />
              </>
              : null }
            <MediumPostList
              postData={ mainData }
              excerptLength={ mediumPostExcerptLength }
              showDate={ showDate }
              showAuthor={ showAuthor }
              hasPhotographer={ hasPhotographer }
              showSubCategories={ showSubcategories }
              innerText={ mainPostsInnerText }
            />
          </MainColumn>
          <aside>
            <div className="withSideBorder">
              <div className={ intro } >
                <h3 className={ greeting }>Hi And Welcome!</h3>
                <div>{ image }</div>
                <div className={ welcome }>
                  <p>I'm Alex and Thunder Island is my creative corner.</p>
                  <p>This space is a passionate mix of everything great and nothing important.</p>
                  <p>Looking for recipe ideas for your diet? Paleo, keto, atkins or low cal?</p> 
                  <p>Do you need to learn or practice some points of English?</p> 
                  <p>Do you feel like passing some time with a short read or seeing a bit of the island of Malta?</p>
                  <p>Or, do you just want a recipe for the most delicious peach meringue roulade you've ever tasted and a great book recommendation while you eat it?</p>
                  <hr role="none" />
                </div>
              </div>
            </div>
          </aside>
        </div>
        <Pagination
          pageLink={ pageLink }
          pageInfo={ pageInfo }
        />
        <Spacer size="medium" />
      </DivColumn>
      <Section>
        <h3 className="addPaddingLeft5">{ carouselTitle }</h3>
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

////** PROP TYPES **////
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default IndexPage;

////** PAGE QUERY **////
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

