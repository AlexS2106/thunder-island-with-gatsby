import React from "react";
import PropTypes from "prop-types";

import {
  grid,
  asideWrapper
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Carousel from "../../components/display/Carousel";
import Layout from "../../components/layout/Layout";
import MainColumn from "../../components/layout/MainColumn"
import MediumPostList from "../../components/display/MediumPostList";
import PageTitle from "../../components/header/PageTitle";
import SmallPostList from "../../components/display/SmallPostList";
import Spacer from "../../components/layout/Spacer";

import useGetAllHealthPosts from "../../queries/useGetAllHealthPosts.query";


////** COMPONENT **////
const HealthPage = ( { pageContext } ) => {

  ////** CONTEXT **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //Unpacking data
  const allHealthPosts = useGetAllHealthPosts();
  //PageTitle
  const pageTitle = "Health";
   //MediumPostList -> PostMedium
  const mainData = allHealthPosts; 
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;
  //SmallPostList -> PostSmall
  const sideData = allHealthPosts;  
  const asidePostsInnerText = "Read More";
  //Carousel -> PostSmall
  const carouselData = allHealthPosts;  
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts"

   ////** COMPONENT **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <div className={ grid }>
        <MainColumn>
          <MediumPostList
            postData={ mainData }
            excerptLength={ excerptLength }
            showDate={ showDate }
            showAuthor={ showAuthor }
            hasPhotographer={ hasPhotographer }
            showSubCategories={ showSubcategories }
            innerText={ mainPostsInnerText }
          />
        </MainColumn>
        <div className={ asideWrapper }>
          <aside>
              <h3>Popular Posts</h3>
            <SmallPostList
              postData={ sideData }
              innerText={ asidePostsInnerText }
            />
          </aside>
        </div>
      </div>
      <Spacer size="medium" />
      <Carousel
        title={ carouselTitle }
        carouselData={ carouselData }
        innerText={ carouselPostsInnerText }
      />
    </Layout>
  );
}

////** PROP TYPES **////
HealthPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default HealthPage;