import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";

import {
  grid
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Carousel from "../components/display/Carousel";
import DivColumn from "../components/layout/DivColumn";
import ExcerptList from "../components/display/ExcerptList";
import Layout from "../components/layout/Layout";
import MediumPostList from "../components/display/MediumPostList";
import MenuInBoxes from "../components/navigation/MenuInBoxes";
import Pagination from "../components/navigation/Pagination";
import Section from "../components/layout/Section";
import SmallPostList from "../components/display/SmallPostList";
import Spacer from "../components/layout/Spacer";

import { useGetPostSelection } from "../queries/useGetPostSelection.query";
import { healthImg, recipesImg, maltaBoatsImg, writingImg, pathImg, booksImg } from "../utilities/staticImgFunctions";


////** COMPONENT **////
const IndexPage = ( { data, pageContext } ) => {

  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const { allPostsList } = data;
  const allPosts = allPostsList.nodes;
  const { recipePost, reviewPost, healthPost, expatPost, poemPost, storyPost } = useGetPostSelection();
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
    {
      link: "/english",
      name: "Learn English",
      image: booksImg(),
    },
  ];
  //ExcerptList -> PostMedium
  const excerptListPosts = [ recipePost, reviewPost,  healthPost, expatPost, poemPost, storyPost ];
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
  //SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const sideData = allPosts;
  //Carousel -> PostSmall
  const carouselData = allPosts;
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts";
  //Pagination
  const pageLink = "";
  const pageInfo = allPostsList.pageInfo;

  ////** FUNCTIONS **////
  //Manages menu selection clicks in menuboxes
  const handleMenuBoxClick = ( e ) => { 
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    navigate( `${ clickedTemp[ 0 ].link }` );
   }

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="large" />
      <DivColumn>
        <MenuInBoxes
          menu={ menuBoxesMenuArray }
          onClick={ handleMenuBoxClick }
        />
        <Spacer size="small" />
        {
          pageContext.currentPage === 1 ?
            <>
              <Section direction="column">
                <header>
                  <h3 className="addPaddingLeft5">All My Latest Posts</h3>
                </header>
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
        <Section direction="column">
          <header>
            <h3 className="addPaddingLeft5">Latest posts</h3>
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
              <div className="withSideBorder">
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
          <Pagination
            pageLink={ pageLink }
            pageInfo={ pageInfo }
          />
          <Spacer size="medium" />
        </Section>
      </DivColumn>
      <Section direction="column">
        <header>
          <h3 className="addPaddingLeft5">{ carouselTitle }</h3>
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

////** PROP TYPES **////
IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  useGetPostSelection: PropTypes.func
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

