import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";

import {
  grid,
  withBorder
} from "./templates.module.css";

import Layout from "../components/layout/Layout";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Spacer from "../components/layout/Spacer";
import Column from "../components/layout/Column";
import Section from "../components/layout/Section";
import ExcerptList from "../components/display/ExcerptList";
import MediumPostList from "../components/display/MediumPostList";
import MenuInBoxes from "../components/navigation/MenuInBoxes";
import SmallPostList from "../components/display/SmallPostList";
import Carousel from "../components/display/Carousel";
import Pagination from "../components/navigation/Pagination";

import { healthImg, recipesImg, maltaBoatsImg, writingImg, pathImg } from "../utilities/staticImgFunctions";


const IndexPage = ( { data, pageContext } ) => {

  ////Data
  const { allPostsList, twoRecipesPost, singleHealthPost, singleExpatsPost, singlePoemPost, singleStoryPost } = data;
  const posts = [  ...twoRecipesPost.nodes, singleHealthPost, singleExpatsPost, singlePoemPost, singleStoryPost];
  console.log(posts)
  const mainData = allPostsList.nodes;
  const sideData = allPostsList.nodes;
  const carouselData = allPostsList.nodes;

  const menuBoxesMenuArray = [
    {
      link: "/recipes",
      name: "Recipes",
      image: recipesImg(),

    },
    {
      link: "/health",
      name: "Health",
      image: healthImg(),
    },
    {
      link: "/expats-in-malta",
      name: "Expats In Malta",
      image: maltaBoatsImg(),
    },
    {
      link: "/writing",
      name: "Writing",
      image: writingImg(),
    },
    {
      link: "/virtual-how",
      name: "Virtual How",
      image: pathImg(),
    },
  ];

  //Component
  const pageLink = "";
  const pageInfo = allPostsList.pageInfo;
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // ///Functions
  const handleMenuBoxClick = ( e ) => { 
    const clickedTemp = menuBoxesMenuArray.filter( item => item.name === e.target.innerText );
    navigate( `${ clickedTemp[ 0 ].link }` );
   }
  ////for the ExcerptList -> PostMedium
  const excerptListInnerText = "Read More";
  const excerptLength = 75;

    ////For the MediumPostList -> PostMedium
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  const mainPostsInnerText = "Continue...";
  const mediumPostExcerptLength = 150;

  ////For the SmallPostList -> PostSmall
  const asidePostsInnerText = "Read More";

  ////For the Carousel -> PostSmall
  const carouselPostsInnerText = "See More";
  const carouselTitle = "Other posts";

  return (
    <Layout>
      <Spacer size="large" />
      <MenuInBoxes
        menu={ menuBoxesMenuArray }
        onClick={ handleMenuBoxClick }
          />
      <Spacer size="large" />
      <Column>
        {
          pageContext.currentPage === 1 ?
        <Section direction="column">
          <header>
            <h3>All My Latest Posts</h3>
          </header>
          <Spacer size="small" />
          <ExcerptList
            list={ posts }
            innerText={ excerptListInnerText }
            excerptLength={ excerptLength }
          />
            </Section>
            : null
        }
      </Column>
      <Spacer size="large" />
      <Column>
      <Section direction="column">
        <header>
          <h3>Latest posts</h3>
        </header>
        <Spacer size="small" />
          { pageContext.currentPage !== 1 ?
            <>
              <Breadcrumbs crumbs={ crumbs } />
              <Spacer size="small" />
            </>
            : null }
        <div className={ grid }>
          <main>
            <MediumPostList
              postData={ mainData }
              excerptLength={ mediumPostExcerptLength }
              showDate={ showDate }
              showAuthor={ showAuthor }
              hasPhotographer={ hasPhotographer }
              showSubCategories={ showSubcategories }
              innerText={ mainPostsInnerText }
            />
          </main>
            <aside>
              <div className={ withBorder }>
                <header>
                  <h3>Popular Posts</h3>
                </header>
                <SmallPostList
                  postData={ sideData }
                  innerText={ asidePostsInnerText }
                />
              </div>
            </aside>
        </div>
      </Section>
      <Pagination
        pageLink={ pageLink }
        pageInfo={ pageInfo }
      />
      <Spacer size="medium" />
      </Column>
      <Section direction="column">
        <header>
          <h3>{ carouselTitle }</h3>
        </header>
        <Spacer size="small" />
        <Carousel
          title={ carouselTitle }
          carouselData={ carouselData }
          innerText={ carouselPostsInnerText }
        />
      </Section >
      
    </Layout>
  );
}

///////// *** PROP TYPES *** ///////////
IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default IndexPage;


export const data = graphql`
query ($limit: Int!, $skip: Int!) {
  allPostsList: allMdx(
    limit: $limit
    filter: {frontmatter: {type: {eq: "post", nin: "profile"}}}
    skip: $skip
    sort: {fields: frontmatter___updated, order: DESC}
  ) {
    nodes {
      id
      frontmatter {
        title
        type
        slug
        mainCategories
        subcategories
        by_course
        by_ingredient
        by_diet
        posted
        updated
        author
        portraitImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        alt
        photographer
        associated
        excerpt
      }
    }
    pageInfo {
      currentPage
      hasNextPage
      hasPreviousPage
      pageCount
    }
  }
  twoRecipesPost: allMdx(filter: {frontmatter: {mainCategories: {eq: "recipes"}}}, limit: 2) {
    nodes {
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
          gatsbyImageData
        }
      }
      alt
      photographer
      associated
      excerpt
    }
  }
}
  singleHealthPost: mdx(frontmatter: {mainCategories: {eq: "health"}}) {
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
          gatsbyImageData
        }
      }
      alt
      photographer
      associated
      excerpt
    }
  }
  singleExpatsPost: mdx(frontmatter: {subcategories: {eq: "expats-in-malta"}}) {
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
          gatsbyImageData
        }
      }
      alt
      photographer
      associated
      excerpt
    }
  }
  singlePoemPost: mdx(frontmatter: {type: {eq: "poem"}}) {
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
          gatsbyImageData
        }
      }
      alt
      photographer
      associated
      excerpt
    }
  }
  singleStoryPost: mdx(frontmatter: {type: {eq: "story"}}) {
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
          gatsbyImageData
        }
      }
      alt
      photographer
      associated
      excerpt
    }
  }
}
`;

