import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  row,
  itemsEnd,
  withBorder,
} from "./templates.module.css";

import Layout from "../components/layout/Layout";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Spacer from "../components/layout/Spacer";
import Column from "../components/layout/Column";
import Button from "../components/buttons/Button"

import MDX from "../providers/MDX";


const HealthTemplate = ( { data, pageContext } ) => {

  ////////// *** STATE *** /////////
  const {
    breadcrumb: { crumbs }
  } = pageContext;

   ///////// *** VARIABLES *** /////////// 
  const { frontmatter, body } = data.mdx;
  const { title, tags, posted, updated, author, landscapeImage, alt, photographer, associated, excerpt } = frontmatter;

  
  ////For the Button in the article
  const innerText = "Go Back";

    ///////// *** FUNCTIONS *** ///////////
  ////For the tags
  const generateTags = tags > 0 ? tags.map( ( tag ) => {
    return (
      <h4 key={ uuidv4() } >{ tag.name }</h4>
    );
  } ) : null;

////To render MDX in the article body
  const contentBody = MDX( body );

    ///////// *** COMPONENT *** ///////////
  return (
    <Layout title={ title } >
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="small" />
      <Column>
        <article>
          <address rel="author">By { author }</address>
          <time dateTime={ updated }> { updated } </time>
          <time dateTime={ posted }> Originally written on { posted } </time>
          <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt }></GatsbyImage>
          <cite>photo by { photographer }</cite>
          { generateTags }
          <div className={ withBorder }>
            <p>{ excerpt }</p>
          </div>
          { contentBody }
          <p>{ associated }</p>
          <div className={ `${row} ${itemsEnd}` }>
             <Button onClick={() => {
           navigate( -1 );
        }
      } innerText={ innerText }></Button>
          </div>
        </article>
      </Column>
    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
HealthTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default HealthTemplate;

///////// *** PAGE QUERY *** ///////////
export const data = graphql`
query healthQuery($slug: String) {
  mdx(
    frontmatter: {slug: {eq: $slug}}
    ) {
    body
    frontmatter {
      title
      type
      slug
      mainCategories
      subcategories
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
      comments
      associated
      excerpt
    }
  }
}
`;