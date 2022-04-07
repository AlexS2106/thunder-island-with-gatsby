import { graphql, useStaticQuery } from "gatsby";


export const useGetPostSelection = () => {
  const { reviewPost, recipePost, healthPost, expatPost, poemPost, storyPost } = useStaticQuery( graphql`
  {
    healthPost: mdx(frontmatter: {mainCategories: {eq: "health"}}) {
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
    expatPost: mdx(frontmatter: {subcategories: {eq: "expats-in-malta"}}) {
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
    poemPost: mdx(frontmatter: {type: {eq: "poem"}}) {
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
    storyPost: mdx(frontmatter: {type: {eq: "story"}}) {
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
    recipePost: mdx(frontmatter: {type: {eq: "recipe", in: "post"}}) {
      frontmatter {
        title
        type
        slug
        mainCategories
        by_course
        by_diet
        by_ingredient
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
    reviewPost: mdx(frontmatter: {type: {eq: "review"}}) {
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
`);
  return {
    reviewPost,
    recipePost,
    healthPost,
    expatPost,
    poemPost,
    storyPost,
  };
}

