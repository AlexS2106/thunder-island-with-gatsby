import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  justify,
  accent
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/carousel/Carousel";
import Layout from "../../components/layout/containers/Layout";
import MainWide from "../../components/layout/containers/MainWide";
import MediumPostList from "../../components/display/postLists/MediumPostList";
import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import MenuInRows from "../../components/navigation/MenuInRows";
import PageTitle from "../../components/typography/PageTitle";
import SmallPostList from "../../components/display/postLists/SmallPostList";
import Spacer from "../../components/layout/spacing/Spacer";
import TagCloud from "../../components/display/tagCloud/TagCloud";

import useGetAllRecipes from "../../queries/useGetAllRecipes.query";
import useGetAllHealthPosts from "../../queries/useGetAllHealthPosts.query";

import { filterList, makeTitle } from "../../utilities/functions";
import { byDietOptions, byIngredientOptions, byCourseOptions, recipeTags, favouriteRecipes } from "../../utilities/indices";
import { ingredientsImg, dietImg, courseImg } from "../../utilities/staticImgFunctions";



////** COMPONENT **////
const RecipesPage = ( { pageContext } ) => {
  const recipesData = useGetAllRecipes();
  const healthsData = useGetAllHealthPosts();
  ////** STATE **////
  const [ menuInRowsState, setMenuInRowsState ] = useState( [ ...byDietOptions, ...byIngredientOptions, ...byCourseOptions ] );
  const [ selectedCategory, setSelectedCategory] = useState( () => { 
    const initialState = "All My ";
    return initialState;
  } );
  const [ shownRecipes, setShownRecipes ] = useState( () => { 
    const initialState = [ ...recipesData ];
    return initialState;
  } );
  const topOfShowingRecipesRef = useRef();
  const [ mainCount, setMainCount ] = useState( 0 );
  const [ selectedTag, setSelectedTag] = useState( () => { 
    const initialState = "My Favourite ";
    return initialState;
  } );
  const [ shownTagRecipes, setShownTagRecipes ] = useState( () => {
    const nodes = filterList( favouriteRecipes, recipesData );
    const initialState = [ ...nodes ];
    return initialState;
  } );
  const topOfShowingTagRecipesRef = useRef();
  const [ asideCount, setAsideCount ] = useState( 0 );

  useEffect( () => {
    topOfShowingRecipesRef.current.scrollIntoView();
  }, [ mainCount ] );

  useEffect( () => {
    topOfShowingTagRecipesRef.current.scrollIntoView();
  }, [ asideCount ] );
  
    ////** CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //recipesData is at the top
  //healthData is at the top
  //PageTitle
  const pageTitle = "Recipes";
  //Number of recipes to show at one time (via onclick function -> MediumPostList & via onclick function -> TagCloud -> SmallPostList)
  const mediumPostListNumDisplayedRecipes = 7;
  const moveOnButtonText = "Nothing yet, show me more."; 
  const moveBackButtonText = "On second thought, let's go back.";
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
  //Carousel(todays recipes) -> PostSmall
  const carouselTodayRecipesBtnText = "See More";
  const carouselTodayRecipesTitle = "Today's Suggestions";
  //Carousel(health posts) -> PostSmall
  const carouselHealthPostsBtnText = "Read more";
  const carouselHealthPostsTitle = "Read About Your Health";
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
    const showTheseRecipes = recipesData.filter( node => node.frontmatter.by_ingredient.includes( e.target.value ) || node.frontmatter.by_diet.includes( e.target.value ) || node.frontmatter.by_course.includes( e.target.value ) );
    setSelectedCategory( () => makeTitle( e.target.value ) );
    setShownRecipes( () => showTheseRecipes );
  };
    //TagCloud + SmallPostMenu - accepts a click which selects a recipe tag and changes all the recipes in the smallPostMenu to be only those of that tag.
  const handleTagCloudClick = ( e ) => {
    setAsideCount( 0 );
    const showTheseRecipes = recipesData.filter( node => node.frontmatter.tags && node.frontmatter.tags.length && node.frontmatter.tags.includes(e.target.value) );
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
        <MainWide>
          <PageTitle title={ `${ selectedCategory } Recipes` } />
          { mainCount > 0 ?
            <>
              <ul className="sideBorderPad" >
                { shownRecipes.slice( 0, mainCount ).map( item => <li key={ uuidv4() }><Link to={ `recipes/${ item.frontmatter.slug }` } className="accentText" activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
              </ul>
              <Button
                innerText={ moveBackButtonText }
                onClick={
                  () => { ( mainCount - mediumPostListNumDisplayedRecipes ) < 0 ? setMainCount( 0 ) : setMainCount( mainCount - mediumPostListNumDisplayedRecipes ) }
                }
              />
            </> : null
          }
          <span role="none" ref={ topOfShowingRecipesRef } />
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
                <ul>
                  { shownRecipes.slice( mainCount + mediumPostListNumDisplayedRecipes ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className="accentText" activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                </ul>
              </> : null
          }
        </MainWide>
        <div className={`flexColumn ${justify}`}>
          <aside className={`sideBorderDark ${accent}`}>
            <TagCloud
              tags={ recipeTags }
              onClick={ handleTagCloudClick }
            />
            <Spacer size="small" />
            <section className="sideBorderPad flexColumn bgLight">
              <h3 className="textCenter pad1 shadowText">{ `${ selectedTag } Recipes `}</h3>
              <Spacer size="small" />
              { asideCount > 0 ?
                <>
                  <ul className="pad1">
                    { shownTagRecipes.slice( 0, asideCount ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className="accentText" activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
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
              <span role="none" ref={ topOfShowingTagRecipesRef }/>
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
                    <ul>
                      { shownTagRecipes.slice( asideCount + smallPostListNumDisplayedRecipes ).map( item => <li key={ uuidv4() }><Link to={ `/recipes/${ item.frontmatter.slug }` } className="accentText" activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                    </ul>
                  </> : null
              }
            </section>
            <Spacer size="small" />
          </aside>
        </div>
      </div>
      <Spacer size="large" />
      <Carousel
        title={ carouselTodayRecipesTitle }
        carouselData={ recipesData }
        innerText={ carouselTodayRecipesBtnText }
      />
      <Spacer size="large" />
      <Carousel
        title={ carouselHealthPostsTitle }
        carouselData={ healthsData }
        innerText={ carouselHealthPostsBtnText }
        id="health"
      />
    </Layout>
  );
}

////** PROP TYPES **////
RecipesPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}



export default RecipesPage;

