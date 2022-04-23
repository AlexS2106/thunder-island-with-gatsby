import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  row,
  itemsEnd
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Button from "../components/buttons/Button";
import Layout from "../components/layout/Layout";
import MainColumn from "../components/layout/MainColumn";
import PageTitle from "../components/header/PageTitle";
import Spacer from "../components/layout/Spacer";

import MDX from "../providers/MDX";


////**  COMPONENT **////
const HealthTemplate = ( { data, pageContext } ) => {

  ////** CONTEXT **////
  const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **//// 
  //Unpacking data
  const { frontmatter, body } = data.mdx;
  const { title, tags, posted, updated, author, landscapeImage, alt, photographer, associated, excerpt } = frontmatter;
  //Article -> Button
  const innerText = "Go Back";
  //Page Title
  const pageTitle = { title };

  ////** FUNCTIONS **////
  //Tags
  const generateTags = tags > 0 ? tags.map( ( tag ) => {
    return (
      <h4 key={ uuidv4() } >{ tag.name }</h4>
    );
  } ) : null;

  //Article MDX
  const contentBody = MDX( body );

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="small" />
      <MainColumn>
        <article>
          <header>
          <address rel="author">By { author }</address>
          <time dateTime={ updated }> { updated } </time>
          <time dateTime={ posted }> Originally written on { posted } </time>
          <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt }></GatsbyImage>
          <cite>photo by { photographer }</cite>
          { generateTags }
          <div className="withSideBorder addBorderPadding">
            <p>{ excerpt }</p>
          </div>
          </header>
          { contentBody }
          <p>{ associated }</p>
          <div className={ `${ row } ${ itemsEnd }` }>
            <Button onClick={ () => {
              navigate( -1 );
            }
            } innerText={ innerText }></Button>
          </div>
        </article>
      </MainColumn>
    </Layout>
  );
}

////** PROP TYPES **////
HealthTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default HealthTemplate;

////** PAGE QUERY **////
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