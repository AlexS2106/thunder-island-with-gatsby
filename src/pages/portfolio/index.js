import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  writingIndex,
  writing,
  contentCard,
  contentCardImage,
  contentCardBody,
  blurWriting,
  marginUnderWriting
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Column from "../../components/layout/Column";
import Layout from "../../components/layout/Layout";
import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import PageTitle from "../../components/header/PageTitle";
import Section from "../../components/layout/Section";
import Spacer from "../../components/layout/Spacer";

import MDX from "../../providers/MDX";
import { makeTitle, sortingUlsFromNodes } from "../../utilities/functions";
import { maltaBoatsImg, writingImg, pathImg } from "../../utilities/staticImgFunctions";
import Button from "../../components/buttons/Button";


const PortfolioPage = ( { data, pageContext } ) => {

  ////////// *** STATE *** /////////
  const [ showAllContentCardBody, setShowAllContentCardBody ] = useState( false ); 
  
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ///////// *** VARIABLES *** ///////////
    ////For the PageTitle
  const pageTitle = "My Portfolios";

    ////For the menuBoxes
  const menuBoxesMenuArray = [
    {
      link: "expats-in-malta",
      name: "Expats In Malta",
      image: maltaBoatsImg(),
    },
    {
      link: "virtual-how",
      name: "Virtual How",
      image: pathImg(),
    },
    {
      link: "writing",
      name: "Writing",
      image: writingImg(),
    }
  ];

  ///For the content
  const { nodes } = data.allMdx;
  const contentCardButtonText = "Continue Reading";

   ///////// *** FUNCTIONS *** ///////////
  ////For the MenuInBoxes
  const handleMenuBoxClick = ( e ) => {
    console.log("You clicked on the menu in rows.")
  }
  ////For the contentIndex
          const contentList = [
      {
        ulName: "my-poems",
        liTitles: sortingUlsFromNodes( nodes, "poem" )
      },
      {
        ulName: "my-stories",
        liTitles: sortingUlsFromNodes( nodes, "story" )
      },
      {
        ulName: "my-reviews",
        liTitles: sortingUlsFromNodes( nodes, "review" )
      },
  ];
  const generateContentList = contentList.map( item => {
    const lis = item.liTitles.map( liTitle => <li key={ uuidv4() }><Link to={"/"}>{ liTitle }</Link></li> )
        return (
          <ul key={ uuidv4() }>
            <h6>{ makeTitle(item.ulName) }</h6>
            { lis }
          </ul>
        );
    } );
  ////For the contentCard
  const sectionHidden = { maxHeight: "25rem", overflow: "hidden" };
  const sectionShown = { overflow: "visible" };
  const handleShowAllContentCardBody = ( ) => {
    setShowAllContentCardBody( showAllContentCardBody => !showAllContentCardBody );
  };
  const generateContentCards = nodes.map( node => {
    const { body, frontmatter } = node;
    const { title, landscapeImage, alt } = frontmatter;
    const contentBody = MDX( body );
    return (
      <div key={ uuidv4() } className={ contentCard } >
        <article>
          <header>
            <h4>{ title }</h4>
          </header>
          <div className={ contentCardImage }>
            <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } ></GatsbyImage>
          </div>
          <Section direction="column" >
            <div style={ showAllContentCardBody ? sectionShown : sectionHidden }>
            { contentBody }
            </div>
          </Section>
          <div role="presentational" className={ blurWriting }></div>
          <span role="presentational" className={ marginUnderWriting }>
            <Button onClick={ handleShowAllContentCardBody } innerText={ contentCardButtonText }>Continue Reading</Button>
          </span>
        </article>
      </div>
    );
  } );


  ///////// *** COMPONENT *** ///////////
  return (
    <Layout>
      <Spacer size="large" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
    <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
      />
      <Spacer size="large" />
      <Column>
        <main className={ grid } >
          <div className={ writingIndex }>
            { generateContentList }
          </div>
          <div className={ writing }>
            { generateContentCards }
          </div>
        </main>
      </Column>

    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
PortfolioPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default PortfolioPage;

///////// *** PAGE QUERY *** ///////////
export const data = graphql`
   query portfolios {
  allMdx(filter: {frontmatter: {mainCategories: {eq: "portfolios"}}}) {
    nodes {
      frontmatter {
        title
        type
        slug
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
      }
      body
    }
  }
}
`;

