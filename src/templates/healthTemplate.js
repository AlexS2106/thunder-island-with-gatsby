import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  itemEnd
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Button from "../components/buttons/Button";
import Intro from "../components/typography/Intro";
import Layout from "../components/layout/containers/Layout";
import MainWide from "../components/layout/containers/MainWide";
import PageTitle from "../components/typography/PageTitle";
import Signature from "../components/typography/Signature";
import Spacer from "../components/layout/spacing/Spacer";

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
  const pageTitle = title;
  ////** FUNCTIONS **////
  //Tags
  const generateTags = tags > 0 ? tags.map( ( tag ) => {
    return (
      <h6 key={ uuidv4() } >{ tag.name }</h6>
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
      <MainWide>
        <article>
          <time dateTime={ updated } className="textCenter"> { updated } </time>
          <time dateTime={ posted } className="textCenter"> Originally written on { posted } </time>
          <Spacer size="small" />
          <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt }></GatsbyImage>
          <cite>photo by { photographer }</cite>
          { generateTags }
          <Intro>
            { excerpt }
          </Intro>
            { contentBody }
          <div style={ { alignSelf: "end", padding: "1rem 6rem 3rem 3rem" } }>
            <Signature rotate signedBy={ author } />
          </div>
          <p>{ associated }</p>
          <div className={ `flexRow ${ itemEnd }` }>
            <Button onClick={ () => {
              navigate( -1 );
            }
            } innerText={ innerText }></Button>
          </div>
        </article>
      </MainWide>
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