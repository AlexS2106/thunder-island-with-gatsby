import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  itemEnd,
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Button from "../components/buttons/Button";
import Intro from "../components/typography/Intro";
import Layout from "../components/layout/Layout";
import MainWide from "../components/layout/MainWide";
import PageTitle from "../components/typography/PageTitle";
import Signature from "../components/typography/Signature";
import Spacer from "../components/layout/Spacer";

import MDX from "../providers/MDX";


////**  COMPONENT **////
const WritingTemplate = ( { data, pageContext } ) => {

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
      <MainWide>
        <article>
          <time dateTime={ posted } className="textCenter"> Originally written on { posted } </time>
          <time dateTime={ updated } className="textCenter"> Updated on { updated } </time>
          <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt }></GatsbyImage>
          <cite>photo by { photographer }</cite>
          { generateTags }
          <Intro>{ excerpt }</Intro>
          { contentBody }
          <Signature rotate signedBy={ author }/>
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
WritingTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default WritingTemplate;

////** PAGE QUERY **////
export const data = graphql`
query writingQuery($slug: String) {
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