import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  asideWrapper,
  indexItem
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/display/Carousel";
import Layout from "../../components/layout/Layout";
import MainColumn from "../../components/layout/MainColumn";
import MediumPostList from "../../components/display/MediumPostList";
import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import MenuInRows from "../../components/navigation/MenuInRows";
import PageTitle from "../../components/header/PageTitle";
import Section from "../../components/layout/Section";
import SmallPostList from "../../components/display/SmallPostList";
import Spacer from "../../components/layout/Spacer";
import TagCloud from "../../components/display/TagCloud";

import { byDietOptions, byIngredientOptions, byCourseOptions, recipeTags, favouriteRecipes1 } from "../../utilities/indices";
import { ingredientsImg, dietImg, courseImg } from "../../utilities/staticImgFunctions";
import { filterList, makeTitle } from "../../utilities/functions";


////** COMPONENT **////
const RecipesPage = ( { data, pageContext } ) => {

  ////** STATE **////
  const [ menuInRowsState, setMenuInRowsState ] = useState( [ ...byDietOptions, ...byIngredientOptions, ...byCourseOptions ] );
  const [ selectedCategory, setSelectedCategory] = useState( () => { 
    const initialState = "All My ";
    return initialState;
  } );
  const [ shownRecipes, setShownRecipes ] = useState( () => { 
    const initialState = [ ...data.allMdx.nodes ];
    return initialState;
  } );
  const [ mainCount, setMainCount ] = useState( 0 );
  const [ selectedTag, setSelectedTag] = useState( () => { 
    const initialState = "My Favourite Recipes";
    return initialState;
  } );
  const [ shownTagRecipes, setShownTagRecipes ] = useState( () => {
    const nodes = filterList( favouriteRecipes1, data.allMdx.nodes );
    const initialState = [ ...nodes ];
    return initialState;
  } );
    const [ asideCount, setAsideCount ] = useState( 0 );
  
    ////** CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const { allMdx } = data;
  const dataNodesArray = allMdx.nodes;
  //PageTitle
  const pageTitle = "Recipes";
  //Number of recipes to show at one time (via onclick function -> MediumPostList & via onclick function -> TagCloud -> SmallPostList)
  const mediumPostListNumDisplayedRecipes = 7;
  const moveOnButtonText = "Nothing yet, let's keep looking..."; 
  const moveBackButtonText = "On second thoughts, let's go back...";
  const smallPostListNumDisplayedRecipes = 6;
 //MediumPostList -> PostMedium
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;
  //SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  //Carousel -> PostSmall
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Todays Suggestion";
  //Menuboxes (bg image, categories and their groupings)
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

   ////** FUNCTIONS ** ////
  //Menubox + MenuInRows - accepts a click which selects a recipe category and shows all the subcategories within the selected category.
  const handleMenuBoxClick = ( e ) => {
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    const clicked = Object.values( clickedTemp[ 0 ].list );

    if ( menuInRowsState.length === clicked.length && clicked.filter( item => menuInRowsState.includes( item ) ).length === menuInRowsState.length ) {
      setMenuInRowsState( [ ...byDietOptions, ...byIngredientOptions, ...byCourseOptions ] );
    } else {
      setMenuInRowsState( clicked );
    }
  };
  //MenuInRows + PageTitle - accepts a click which selects a recipe subcategory and changes all the recipes on the page to be only those of that category and alters the pageTitle heading.
  const handleMenuInRowsClick = ( e ) => {
    setMainCount( 0 );
    const showTheseRecipes = dataNodesArray.filter( node => node.frontmatter.by_ingredient.includes( e.target.value ) || node.frontmatter.by_diet.includes( e.target.value ) || node.frontmatter.by_course.includes( e.target.value ) );
    setSelectedCategory( () => makeTitle( e.target.value ) );
    setShownRecipes( () => showTheseRecipes );
  };
    //TagCloud + SmallPostMenu - accepts a click which selects a recipe tag and changes all the recipes in the smallPostMenu to be only those of that tag.
  const handleTagCloudClick = ( e ) => {
    setAsideCount( 0 );
    const showTheseRecipes = dataNodesArray.filter( node => node.frontmatter.tags && node.frontmatter.tags.length && node.frontmatter.tags.includes(e.target.value) );
    setSelectedTag( () => makeTitle( e.target.value ) );
    setShownTagRecipes( () => showTheseRecipes );
  };
  
  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
      />
      <Spacer size="medium" />
      <MenuInRows
        menu={ menuInRowsState }
        onClick={ handleMenuInRowsClick }
      />
      <Spacer size="medium" />
      <div className={ grid }>
        <MainColumn>
          <PageTitle title={ `${ selectedCategory } Recipes` } />
          { mainCount > 0 ?
            <>
              <ul className="addBorderPadding">
                { shownRecipes.slice( 0, mainCount ).map( item => <li key={ uuidv4() }><Link to={ `recipes/${ item.frontmatter.slug }` } className={ indexItem } activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
              </ul>
              <Button
                innerText={ moveBackButtonText }
                onClick={
                  () => { ( mainCount - mediumPostListNumDisplayedRecipes ) < 0 ? setMainCount( 0 ) : setMainCount( mainCount - mediumPostListNumDisplayedRecipes ) }
                }
              />
            </> : null
          }
          <MediumPostList
            postData={ shownRecipes.slice( mainCount, mainCount + mediumPostListNumDisplayedRecipes ) }
            excerptLength={ excerptLength }
            showDate={ showDate }
            showAuthor={ showAuthor }
            hasPhotographer={ hasPhotographer }
            showSubCategories={ showSubcategories }
            innerText={ mainPostsInnerText }
          />
          {
            mainCount + mediumPostListNumDisplayedRecipes < shownRecipes.length ?
              <>
                <Button innerText={ moveOnButtonText } onClick={ () => setMainCount( mainCount + mediumPostListNumDisplayedRecipes ) } />
                <Spacer size="small" />
                <ul className="addBorderPadding">
                  { shownRecipes.slice( mainCount + mediumPostListNumDisplayedRecipes ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className={ indexItem } activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                </ul>
              </> : null
          }
        </MainColumn>
        <div className={ asideWrapper }>
          <aside>
            <TagCloud
              tags={ recipeTags }
              onClick={ handleTagCloudClick }
            />
            <Spacer size="small" />
            <Section>
              <h3>{ selectedTag }</h3>
              <Spacer size="small" />
              { asideCount > 0 ?
                <>
                  <ul className="addBorderPadding">
                    { shownTagRecipes.slice( 0, asideCount ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className={ indexItem } activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                  </ul>
                  <Spacer size="small" />
                  <Button
                    innerText={ moveBackButtonText }
                    onClick={
                      () => { ( asideCount - smallPostListNumDisplayedRecipes ) < 0 ? setAsideCount( 0 ) : setAsideCount( asideCount - smallPostListNumDisplayedRecipes ) }
                    }
                  />
                  <Spacer size="small" />
                </> : null
              }
              <SmallPostList
                postData={ shownTagRecipes.slice( 0, smallPostListNumDisplayedRecipes ) }
                onClick={ handleTagCloudClick }
                innerText={ asidePostsInnerText }
              />
              {
                asideCount + smallPostListNumDisplayedRecipes < shownTagRecipes.length ?
                  <>
                    <Button innerText={ moveOnButtonText } onClick={ () => setAsideCount( asideCount + smallPostListNumDisplayedRecipes ) } />
                    <Spacer size="small" />
                    <ul className="addBorderPadding">
                      { shownTagRecipes.slice( asideCount + smallPostListNumDisplayedRecipes ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className={ indexItem } activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                    </ul>
                  </> : null
              }
            </Section>
            <Spacer size="small" />
          </aside>
        </div>
      </div>
      <Spacer size="large" />
      <Carousel
        title={ carouselTitle }
        carouselData={ dataNodesArray }
        innerText={ carouselPostsInnerText }
      />
    </Layout>
  );
}

////** PROP TYPES **////
RecipesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default RecipesPage;

////** PAGE QUERY **////
export const data = graphql`
query allRecipesList {
  allMdx(
    filter: {frontmatter: {mainCategories: {eq: "recipes"}}}
    sort: {fields: frontmatter___updated, order: DESC}
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
        tags
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
  }
}
`;

