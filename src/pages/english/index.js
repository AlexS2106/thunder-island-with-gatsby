import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  english,
  clusterGrid,
  clusterImageWrapper,
  clusterTitle,
  clusterExcerpt,
  clusterLevel,
  clusterList
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Layout from "../../components/layout/containers/Layout";
import MainWide from "../../components/layout/containers/MainWide";
import PageTitle from "../../components/typography/PageTitle";
import Spacer from "../../components/layout/spacing/Spacer";

import { makeTitle } from "../../utilities/functions";
import { usingGetImg, pastImg, questionMarksImg, secondImg } from "../../utilities/staticImgFunctions";


////** COMPONENT **////
const EnglishPage = ( { pageContext } ) => { 

  ////** CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  //// *** VARIABLES *** ////
  //PageTitle
  const pageTitle = "My English Lessons And Exercises"; 
  //MenuBoxes  
  const availableClusters = [
    {
      title: "Get And Got",
      image: usingGetImg(),
      excerpt: "The use of get and got by native English speakers is very confusing. Make it clearer with these lessons and exercises.",
      level: "CEFR B1",
      link: "using-get/",
      lessons: [ "complete-lesson" ],
      exercises: ["exercise-get-for-obtain-1"],
      previousClusters: [],
      nextClusters: [],
    },
    {
      title: "Past Perfect",
      image: pastImg(),
      excerpt: "All about the past perfect. Learn to talk about a past action before another past action. Start with a simple lesson and exercises and then move on to advanced.",
      level: "CEFR B1",
      link: "past-perfect/",
      lessons: [ "advanced-lesson" ],
      exercises: [],
      previousClusters: [],
      nextClusters: [],
    },
    {
      title: "Second Conditional",
      image: secondImg(),
      excerpt: "Learn the conditional for an imagined condition in the present. Start simply then move on to advanced.",
      level: "CEFR B1",
      link: "second-conditional/",
      lessons: ["advanced-lesson"],
      exercises: [],
      previousClusters: [],
      nextClusters: [],
    },
    {
      title: "Tag Questions",
      image: questionMarksImg(),
      excerpt: "Want to make tiny informal questions to add to the end of a sentence? Here's how!",
      level: "CEFR B1",
      link: "tag-questions/",
      lessons: ["advanced-lesson"],
      exercises: ["make-the-tag-questions"],
      previousClusters: [],
      nextClusters: [],
    },
  ];
  
  ////** FUNCTIONS ** ////
  const clusters = availableClusters.map( cluster => {
    return (
      <div key={ uuidv4() } className={ clusterGrid }>
        <div className={ clusterImageWrapper}>{ cluster.image }</div>
        <h4 className={ clusterTitle }>{ cluster.title }</h4>
        <p className={ clusterExcerpt }>{ cluster.excerpt }</p>
        <h5 className={ clusterLevel }>{ cluster.level }</h5>
        <ul className={ clusterList }>
          { cluster.lessons.map( lesson => <li key={ uuidv4() } ><Link to={ `${ cluster.link }${ lesson }` } className="accentText" activeClassName="isActive" >{ makeTitle( lesson ) }</Link></li> ) }
        </ul>
        <ul className={ clusterList }>
          { cluster.exercises.map( exercise => <li key={ uuidv4() } ><Link to={ `${ cluster.link }${ exercise }` } className=" accentText" activeClassName="isActive">{ makeTitle( exercise ) }</Link></li> ) }
        </ul>
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
      <Spacer size="small" />
      <MainWide>
      <div className={ english }>
        { clusters }
      </div>
      </MainWide>
    </Layout>
  );
}

////** PROP TYPES **////
EnglishPage.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default EnglishPage;