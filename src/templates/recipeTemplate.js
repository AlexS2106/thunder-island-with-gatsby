import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  mediumWidth,
  itemEnd,
  adaptSignature1,
  card,
  cardHeading,
  cardFooter
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Button from "../components/buttons/Button";
import Intro from "../components/typography/Intro";
import Layout from "../components/layout/containers/Layout";
import MainWide from "../components/layout/containers/MainWide";
import PageTitle from "../components/typography/PageTitle";
import Signature from "../components/typography/Signature";
import SmallPostList from "../components/display/postLists/SmallPostList";
import Spacer from "../components/layout/spacing/Spacer";

import MDX from "../providers/MDX";
import { listSubcategories, makeTitle } from "../utilities/functions";


////** COMPONENT **////
const RecipeTemplate = ( { data, pageContext } ) => {
  
  ////** CONTEXT **////
  const {
    breadcrumb: { crumbs }
  } = pageContext;
  
  ////** VARIABLES **////
  //Unpacking imported data
  const { recipePost, associated } = data;
  const associatedRecipes = associated.nodes;
  const { frontmatter, body } = recipePost;
  const { title, posted, updated, author, landscapeImage, alt, photographer, excerpt } = frontmatter;
  //PageTitle
  const pageTitle = title;
  //Buttons inner text
  const endButtonInnerText = "Go back?";
  //SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const asidePostsHeaderText = "Add another recipe?";

  ////** FUNCTIONS **////
  //Checks for subcategories and generates a list of subcategories from the frontmatter in the article (via props.data.recipePost through the page query)
  const subcats = listSubcategories( frontmatter );
  const generateSubcats = <h6>{ subcats.map( ( tag, index ) => {
    if ( index === 0 ) {
      return <span key={ uuidv4() } > | { makeTitle( tag ) } | </span>
    } else if ( index === subcats.length - 1 ) {
      return <span key={ uuidv4() }>{ makeTitle( tag ) } | </span>
    } else {
      return <span key={ uuidv4() } >{ makeTitle( tag ) } | </span>
    }
  } ) } </h6>;
  //MDX article content (via props.data.recipePost.body through the page query)
  const contentBody = MDX( body );

   ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ grid }>
        <MainWide>
          <article>
            <div className={`flexColumn textCenter ${mediumWidth}`}>
            <time dateTime={ posted } > Written on { posted } </time>
            { posted === updated ? <time dateTime={ updated } > Updated on { updated } </time> : null }
            <Spacer size="small" />
            <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
            <cite>photo by { photographer }</cite>
            <Spacer size="small" />
            <Intro>{ excerpt }</Intro>
            </div>
            <Spacer size="large" />
            <div className={ `flexColumn pad1 ${card}` }>
              <header className={ `flexColumn ${cardHeading}` }>
                <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
                <h2 className="textCenter shadowText">{ title }</h2>
                 { generateSubcats } 
              </header>
                { contentBody }
              <div className={ adaptSignature1 }>
                <Signature rotate signedBy={ author } />
              </div>
              <div className={ cardFooter }>
                <p>Nutrition... I'm working on it! It's coming soon!</p>
              </div>
            </div>
          </article>
        </MainWide>
        <aside className="flexColumn">
          <section className="sideBorderDark flexColumn bgLight">
            <header>
              <h3 className="textCenter pad1 shadowText">{ asidePostsHeaderText }</h3>
            </header>
            <SmallPostList
              postData={ associatedRecipes }
              innerText={ asidePostsInnerText }
            />
          </section>
        </aside>
        <div className={ `flexRow ${ itemEnd }` }>
          <Button onClick={ () => {
            navigate( -1 );
          }
          } innerText={ endButtonInnerText }></Button>
        </div>
      </div>
    </Layout>
  );
}

////** PROP TYPES **////
RecipeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default RecipeTemplate;

////** PAGE QUERY **////
export const data = graphql`
query recipeQuery($slug: String, $associated: [String]) {
recipePost:  mdx(
    frontmatter: {slug: {eq: $slug}}
    ) {
    id
    body
    frontmatter {
      title
      type
      by_course
      by_ingredient
      by_diet
      posted
      updated
      author
      landscapeImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      alt
      photographer
      excerpt
    }
  }
   associated: allMdx(
    filter: {frontmatter: {slug: {in: $associated}}}
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