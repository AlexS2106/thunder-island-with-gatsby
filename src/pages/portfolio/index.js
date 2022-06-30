import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import {
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import IndexLeft from "../../components/layout/indexesWithContent/IndexLeft";
import Intro from "../../components/typography/Intro";
import Layout from "../../components/layout/containers/Layout";
import MainWide from "../../components/layout/containers/MainWide";
import MenuInBoxes from "../../components/navigation/MenuInBoxes";
import PageTitle from "../../components/typography/PageTitle";
import Spacer from "../../components/layout/spacing/Spacer";

import { pathImg, writingImg } from "../../utilities/staticImgFunctions";

////** COMPONENT **////
const PortfolioPage = ( { data, pageContext } ) => {

////** STATE & CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const { nodes } = data.allMdx;
  //PageTitle 
  const pageTitle = "My Portfolios";
  //MenuBoxes (images, button text and hash links)
  const topMenuBoxesMenuArray = [
    {
      link: "#content",
      name: "Content Writing",
      image: writingImg(),
    },
    {
      link: "#dev",
      name: "Coding",
      image: pathImg(),
    },
    {
      link: "#photos",
      name: "Photographs",
      image: pathImg(),
    },
  ];
  //MenuBoxes for dev display (images, button text and hash links)
  const devMenuBoxesMenuArray = [
    {
      link: "https://github.com/AlexS2106/thunder-island-with-gatsby",
      name: "Thunder Island",
      image: writingImg(),
    },
    {
      link: "https://github.com/AlexS2106/starwars-vacation-planner",
      name: "Yoda Holidays",
      image: pathImg(),
    },
    {
      link: "https://github.com/AlexS2106/market-place",
      name: "The Market Place",
      image: pathImg(),
    },
  ];
  //IndexAndContentDisplay
  const indexAndContentDisplayData = nodes;
  //Intro string
  const intro = `Books read, movies watched, information informed, opinions opined, poems mused, stories woven, projects coded, walks walked, experiences exposed, photographs kept, life lived.`
    ////** FUNCTIONS **////
  //Manages menu selection clicks in the top menuboxes
  const handleTopMenuBoxClick = ( e ) => { 
    const clickedTemp = topMenuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    scrollTo( `${ clickedTemp[ 0 ].link }` );
  }
  //Manages menu selection clicks in menuboxes
  const handleDevMenuBoxClick = ( e ) => { 
    const clickedTemp = devMenuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    window.open(`${ clickedTemp[ 0 ].link }`, `_blank`);
  }
  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="small" />
      <Intro>{ intro }</Intro>
      <Spacer size="small" />
      <h2 className="textCenter shadowText">What would you like to see?</h2>
      <MenuInBoxes
        menu={ topMenuBoxesMenuArray }
        onClick={ handleTopMenuBoxClick }
      />
      <Spacer size="small" />
      <MainWide>
        <h2 id="content" className="textCenter shadowText">Content Writing</h2>
        <Spacer size="small" />
        <IndexLeft list={ indexAndContentDisplayData } />
        <Spacer size="medium" />
        <section className="flexColumn">
          <h2 id="dev" className="textCenter shadowText">Coding Projects</h2>
          <Spacer size="small" />
          <MenuInBoxes
            menu={ devMenuBoxesMenuArray }
            onClick={ handleDevMenuBoxClick }
          />
          <Spacer size="small" />
        </section>
        <section className="flexColumn">
          <h2 id="photos" className="textCenter shadowText">Photograph Albums</h2>
          <Spacer size="small" />
          <p className="textCenter" style={ {fontSize: "3rem"} }>Working on it...</p>
        </section>
      </MainWide>
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
  allMdx(
    filter: {frontmatter: {mainCategories: {in: ["portfolio", "health"]}}}
    sort: {order: DESC, fields: frontmatter___posted}
  ) {
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
        mainCategories
        alt
      }
      body
    }
  }
}
`;

