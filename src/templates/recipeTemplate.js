import React from "react";
import PropTypes from "prop-types";
import { graphql,  navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  addPadding,
  row,
  itemsEnd,
  card,
  cardHeading,
  cardBody,
  cardFooter
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Button from "../components/buttons/Button";
import Layout from "../components/layout/Layout";
import MainColumn from "../components/layout/MainColumn";
import PageTitle from "../components/layout/MainColumn";
import SmallPostList from "../components/display/SmallPostList";
import Spacer from "../components/layout/Spacer";

import MDX from "../providers/MDX";
import { listSubcategories, makeTitle } from "../utilities/functions";


////** COMPONENT **////
const RecipeTemplate = ( { data, pageContext } ) => {
  
  ////** STATE **////
   const {
    breadcrumb: { crumbs }
  } = pageContext;
  
  ////** VARIABLES **////
  //Unpacking imported data
  const { recipePost, associated } = data;
  const associatedRecipes = associated.nodes;
  const { frontmatter, body } = recipePost;
  const { title, posted, updated, author, landscapeImage, alt, photographer, excerpt } = frontmatter;
  //Button inner text
  const innerText = "Go Back";
  //SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const asidePostsHeaderText = "Add another recipe?";
  //PageTitle
  const pageTitle = { title };

  ////** FUNCTIONS **////
  //Subcategories in the article
  const subcats = listSubcategories( frontmatter );
  const generateSubcats = subcats.map( ( tag, index ) => index === 0 ? <span key={ uuidv4() } >| { makeTitle( tag ) } | </span> : index === subcats.length - 1 ? <span key={ uuidv4() }>{ makeTitle( tag ) } |</span> : <span key={ uuidv4() } >{ makeTitle( tag ) } |</span> );
  //MDX article content
  const contentBody = MDX( body );

   ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ grid }>
        <MainColumn>
          <article>
            <address rel="author">by { author }</address>
            { posted === updated ? <time dateTime={ updated }> Updated on { updated } </time> : null }
            <time dateTime={ posted }> Written on { posted } </time>
            <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
            <cite>photo by { photographer }</cite>
            <Spacer size="small" />
            <div className="withSideBorder">
              <p className={ addPadding }>{ excerpt }</p>
            </div>
            <Spacer size="small" />
            <div className={ card }>
              <div className={ cardHeading }>
                <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
                <h2>{ title }</h2>
                <h6> { generateSubcats } </h6>
              </div>
              <div className={ cardBody } >
                { contentBody }
              </div>
              <div className={ cardFooter }>
                <p>Nutrition... coming soon!</p>
              </div>
            </div>
          </article>
        </MainColumn>
        <aside>
          <div className="withSideBorder">
            <header>
              <h3>{ asidePostsHeaderText }</h3>
            </header>
            <SmallPostList
              postData={ associatedRecipes }
              innerText={ asidePostsInnerText }
            />
          </div>
        </aside>
        <div className={ `${ row } ${ itemsEnd }` }>
          <Button onClick={ () => {
            navigate( -1 );
          }
          } innerText={ innerText }></Button>
        </div>
      </div>
    </Layout>
  );
}

////** PROP TYPES **////
RecipeTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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