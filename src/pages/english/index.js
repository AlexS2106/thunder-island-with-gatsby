import React from "react";
import { Link, navigate } from "gatsby";
import { v4 as uuidv4 } from 'uuid';

import {
  clusterStyling,
  clusterGrid
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/header/PageTitle";
import Spacer from "../../components/layout/Spacer";

import { usingGetImg } from "../../utilities/staticImgFunctions";


const EnglishPage = ( { pageContext } ) => { 

  ///////// *** STATE *** ///////////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ///////// *** VARIABLES *** ///////////
  ////For the PageTitle
  const pageTitle = "My English Lessons And Exercises"; 
  ////For the MenuBoxes  
  const availableClusters = [
    {
      title: "Get And Got",
      image: usingGetImg(),
      intro: "The use of get and got by native English speakers is very confusing. Get help and practice here.",
      level: "B1",
      link: "using-get/",
      lessons: ["advanced-lesson"],
      exercises: ["exercise"],
      previousClusters: [],
      nextClusters: [],
    },
  ];
  ///////// *** FUNCTIONS *** ///////////
  const clusters = availableClusters.map( cluster => {
    return (
      <div key={ uuidv4() }className={ clusterStyling }>
          { cluster.image }
          <h4>{ cluster.title }</h4>
          <p>{ cluster.intro }</p>
          <ul>
            <li><Link to={ `${cluster.link}${cluster.lessons[ 0 ]}` }>Advanced Lesson</Link></li>
            <li><Link to={`${cluster.link}${cluster.exercises[ 0 ]}` }>Exercises</Link></li>
          </ul>
        </div>
    );
  } );
  ///////// *** COMPONENT *** ///////////
  return (
    <Layout>
      <Spacer size="medium" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <main className={ clusterGrid }>
        { clusters }
      </main>
    </Layout>
  );
}

export default EnglishPage;