import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import {
  grid,
  asideWrapper
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Carousel from "../../components/display/Carousel";
import Layout from "../../components/layout/Layout";
import MediumPostList from "../../components/display/MediumPostList";
import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import MenuInRows from "../../components/navigation/MenuInRows";
import PageTitle from "../../components/header/PageTitle";
import Pagination from "../../components/navigation/Pagination";
import Section from "../../components/layout/Section";
import SmallPostList from "../../components/display/SmallPostList";
import Spacer from "../../components/layout/Spacer";
import TagCloud from "../../components/display/TagCloud";


import { byDietOptions, byIngredientOptions, byCourseOptions, recipeTags, recipeSuggestions1 } from "../../utilities/indices";
import { ingredientsImg, dietImg, courseImg } from "../../utilities/staticImgFunctions";
import { filterList } from "../../utilities/functions";

const RecipesPage = ( { data, pageContext } ) => {

  ////////// *** STATE *** /////////
  const [ menuInRowsState, setMenuInRowsState ] = useState( [ ...byDietOptions, ...byIngredientOptions, ...byCourseOptions ] );
  
  const {
    breadcrumb: { crumbs },
  } = pageContext;

////Data

  const menuBoxesMenuArray = [
    {
      list: [ ...byIngredientOptions ],
      name: "By Ingredient",
      image: ingredientsImg(),
    },
    {
      list: [ ...byCourseOptions ],
      name: "By Course",
      image: courseImg(),
    },
    {
      list: [ ...byDietOptions ],
      name: "By Diet",
      image: dietImg(),
    }
  ];

    ///Functions
  const handleMenuBoxClick = ( e ) => {
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    const clicked = Object.values( clickedTemp[ 0 ].list );

    if ( menuInRowsState.length === clicked.length && clicked.filter( item => menuInRowsState.includes( item ) ).length === menuInRowsState.length ) {
      setMenuInRowsState( [ ...byDietOptions, ...byIngredientOptions, ...byCourseOptions ] );
    } else { 
      setMenuInRowsState( clicked );
    }
  }

  const handleMenuInRowsClick = () => { 
    console.log("You clicked on the menu in rows.")
  } 

  ///////// *** VARIABLES *** ///////////
  ////Unpacking data
  const pageInfo = data.allMdx.pageInfo;
  const dataNodesArray = data.allMdx.nodes;
  ////For the PageTitle
  const pageTitle = "Recipes";

 ////For the MediumPostList -> PostMedium
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;

  ////For the SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const asideRecipeSuggestions = filterList( recipeSuggestions1, dataNodesArray );

  ////For Pagination
  const pageLink = "recipes";

  ////For the Carousel -> PostSmall
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Todays Suggestion";
  ///////// *** FUNCTIONS *** ///////////
  ///////// *** COMPONENT *** ///////////
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
      />
      <Spacer size="medium" />
      <MenuInRows
        menu={ menuInRowsState }
        onClick={ handleMenuInRowsClick }
      />
      <Spacer size="small" />
      <div className={ grid }>
        <main>
          <MediumPostList
            postData={ dataNodesArray }
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
            <TagCloud tags={ recipeTags } />
            <Spacer size="small" />
            <Section direction="column">
              <header>
                <h3>My Favourite Recipes</h3>
              </header>
              <Spacer size="small" />
              <SmallPostList
                postData={ asideRecipeSuggestions }
                innerText={ asidePostsInnerText }
              />
            </Section>
            <Spacer size="small" />
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
        carouselData={ dataNodesArray }
        innerText={ carouselPostsInnerText }
      />
    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
RecipesPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default RecipesPage;

///////// *** PAGE QUERY *** ///////////

export const data = graphql`
query allRecipesList {
  allMdx(
    filter: {frontmatter: {mainCategories: {eq: "recipes"}}}
    ) {
    nodes {
      id
      frontmatter {
        title
        type
        slug
        mainCategories
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

