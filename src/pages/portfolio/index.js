import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  indexItem,
  writing,
  contentCard,
  contentCardImage,
  blurWriting,
  marginUnderWriting,
  contentCardEnd
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Button from "../../components/buttons/Button";
import Layout from "../../components/layout/Layout";
import MainColumn from "../../components/layout/MainColumn";
// import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import PageTitle from "../../components/header/PageTitle";
import Section from "../../components/layout/Section";
import Spacer from "../../components/layout/Spacer";

import MDX from "../../providers/MDX";
import { makeTitle, sortingUlsFromNodes } from "../../utilities/functions";
// import { maltaBoatsImg, writingImg, pathImg } from "../../utilities/staticImgFunctions";


////** COMPONENT **////
const PortfolioPage = ( { data, pageContext } ) => {

////** STATE **////
  const [ showAllContentCardBody, setShowAllContentCardBody ] = useState( false ); 
  
 ////** CONTEXT **//// 
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const { nodes } = data.allMdx;
  //PageTitle
  const pageTitle = "My Portfolios";
  // //MenuBoxes (bg images, titles, links to pages)// Add this in when the pages have more content
  // const menuBoxesMenuArray = [
  //   {
  //     link: "expats-in-malta",
  //     name: "Expats In Malta",
  //     image: maltaBoatsImg(),
  //   },
  //   {
  //     link: "virtual-how",
  //     name: "Virtual How",
  //     image: pathImg(),
  //   },
  //   {
  //     link: "writing",
  //     name: "Writing",
  //     image: writingImg(),
  //   }
  // ];
  //ContentIndex (side menu of all writing content)
  const contentIndexList = [
      {
        ulName: "my-poems",
        liTitles: sortingUlsFromNodes( nodes, "poem" )
      },
      {
        ulName: "my-reviews",
        liTitles: sortingUlsFromNodes( nodes, "review" )
      },
      {
        ulName: "my-stories",
        liTitles: sortingUlsFromNodes( nodes, "story" )
      },
  ];
  //Content -> Button
  const contentCardButtonText = "Continue Reading";

   ////** FUNCTIONS **////
  // //MenuInBoxes TO BE COMPLETED WHEN CONTENT IS ADDED TO EXPATS-IN-MALTA, VIRTUAL-HOW AND WRITING
  // const handleMenuBoxClick = ( e ) => {
  //   const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
  //   const clicked = { ...clickedTemp };
  //   navigate( `${ clicked[0].link }` );
  // }
  //ContentIndex (make the post titles into a list)
  const generateContentIndex = contentIndexList.map( item => {
    const liTitlesList = item.liTitles.map( liTitle => <li key={ uuidv4() }><Link to={ "/" } className={ indexItem } activeClassName="isActive" >{ liTitle }</Link></li> )
        return (
          <ul key={ uuidv4() } className="addBorderPadding">
            <h6>{ makeTitle(item.ulName) }</h6>
            { liTitlesList }
          </ul>
        );
    } );
  //ContentCard (toggles the opening to show the full content or closing to show an excerpt)
  const handleShowAllContentCardBody = () => {
    setShowAllContentCardBody( showAllContentCardBody => !showAllContentCardBody );
  };
  //ContentCard (generates the ContentCards)
  const generateContentCards = nodes.map( node => {
    const { body, frontmatter } = node;
    const { title, landscapeImage, alt } = frontmatter;
    const contentBody = MDX( body );
    const sectionHidden = { maxHeight: "25rem", overflow: "hidden" };
    const sectionShown = { overflow: "visible" };
    return (
      <div key={ uuidv4() } className={ contentCard } >
        <article>
            <h4>{ title }</h4>
          <div className={ contentCardImage }>
            <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } />
          </div>
          <Section>
            <div style={ showAllContentCardBody ? sectionShown : sectionHidden }>
            { contentBody }
            </div>
          </Section>
          <div role="none" className={ blurWriting }></div>
          <span className={ marginUnderWriting }>
            <Button onClick={ handleShowAllContentCardBody } innerText={ contentCardButtonText }>Continue Reading</Button>
          </span>
        </article>
        <hr role="none" className={ contentCardEnd }/>
      </div>
    );
  } );

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      {/* //Add this menu list for portfolio pages after more content is added to expats-in-malta, virtual-how and writing
      <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
      /> */}
      <Spacer size="large" />
      <MainColumn>
        <div className={ grid } >
          <div>
            { generateContentIndex }
          </div>
          <div className={ writing }>
            { generateContentCards }
          </div>
        </div>
      </MainColumn>
    </Layout>
  );
}

////** PROP TYPES **////
PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
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

