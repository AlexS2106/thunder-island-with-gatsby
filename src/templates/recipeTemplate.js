import React from "react";
import PropTypes from "prop-types";
import { graphql,  navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  grid, 
  withBorder,
  row,
  itemsEnd,
  card,
  cardHeading,
  cardBody,
  cardFooter
} from "./templates.module.css";

import Layout from "../components/layout/Layout";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Spacer from "../components/layout/Spacer";
import SmallPostList from "../components/display/SmallPostList";
import Button from "../components/buttons/Button";

import MDX from "../providers/MDX";
import { listSubcategories, makeTitle } from "../utilities/functions";


const RecipeTemplate = ( { data, pageContext } ) => {
  
  ////////// *** STATE *** /////////
   const {
    breadcrumb: { crumbs }
  } = pageContext;
  
  ///////// *** VARIABLES *** ///////////
  ////Unpacking queried data
  const { recipePost, associated } = data;
  const associatedRecipes = associated.nodes;
  const { frontmatter, body } = recipePost;
  const { title, posted, updated, author, landscapeImage, alt, photographer, excerpt } = frontmatter;
 ////For the button text
  const innerText = "Go Back";
  ////For the SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";
  const asidePostsHeaderText = "Add another recipe?";

   ///////// *** FUNCTIONS *** ///////////
  ////For the subcategories in the article
  const subcats = listSubcategories( frontmatter );
  const generateSubcats = subcats.map( ( tag, index ) => index === 0 ? <span key={ uuidv4() } >| { makeTitle( tag ) } | </span> : index === subcats.length - 1 ? <span key={ uuidv4() }>{ makeTitle( tag ) } |</span> : <span key={ uuidv4() } >{ makeTitle( tag ) } |</span> );
  
   ////For the article content
  const contentBody = MDX( body );
  


   ///////// *** COMPONENT *** ///////////
  return (
    <Layout title={ title } >
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <div className={ grid }>
        <main>
        <article>
          <address rel="author">by { author }</address>
          { posted === updated ? <time dateTime={ updated }> Updated on { updated } </time> : null }
          <time dateTime={ posted }> Written on { posted } </time>
          <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
          <cite>photo by { photographer }</cite>
           <Spacer size="small" />
          <div className={ withBorder }>
            <p>{ excerpt }</p>
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
        </main>
        
        <aside>
          <div className={ withBorder }>
            <header>
              <h3>{ asidePostsHeaderText }</h3>
            </header>
            <SmallPostList
              postData={ associatedRecipes }
              innerText={ asidePostsInnerText }
          />
           </div>
          </aside>
       
          <div className={ `${row} ${itemsEnd}` }>
             <Button onClick={() => {
           navigate( -1 );
        }
      } innerText={ innerText }></Button>
          </div>
        </div>
    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
RecipeTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default RecipeTemplate;

///////// *** PAGE QUERY *** ///////////
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