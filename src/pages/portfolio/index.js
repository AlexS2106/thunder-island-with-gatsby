import React, { useRef } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  grid,
  indexItem,
  writing
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import ContentCardList from "../../components/display/ContentCardList";
import Layout from "../../components/layout/Layout";
import MainColumn from "../../components/layout/MainColumn";
import PageTitle from "../../components/header/PageTitle";
import Spacer from "../../components/layout/Spacer";

import { makeTitle, makeSlug, sortingUlsFromNodes } from "../../utilities/functions";


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
  //ContentCardList -> ContentCard -> Button
  const contentCardButtonText = "Continue...";

   ////** FUNCTIONS **////
  //ContentIndex (make the post titles into a list)
  const generateContentIndex = contentIndexList.map( item => {
    const liTitlesList = item.liTitles.map( liTitle => <li key={ uuidv4() }><a href={ `#${makeSlug(liTitle)}` } className={ indexItem } activeClassName="isActive" >{ liTitle }</a></li> )
        return (
          <ul key={ uuidv4() } className="addBorderPadding">
            <h6>{ makeTitle(item.ulName) }</h6>
            { liTitlesList }
          </ul>
        );
  } );

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="small" />
        <p className="withSideBorder addBorderPadding" style={ {maxInlineSize: "fit-content", margin: "auto" } }>Books read, movies watched, opinions opined, poems mused, stories woven, walks walked, photographs kept, life lived.</p>
      <Spacer size="small" />
      <MainColumn>
        <div className={ grid } >
          <div>
            { generateContentIndex }
          </div>
          <div className={ writing }>
            <ContentCardList
              list={ nodes }
              btnText={ contentCardButtonText }
            />
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
  allMdx(
    filter: {frontmatter: {mainCategories: {eq: "portfolio"}}}
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
        alt
      }
      body
    }
  }
}

`;

