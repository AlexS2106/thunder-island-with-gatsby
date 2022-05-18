import { useStaticQuery, graphql } from "gatsby"

const useGetAllRecipes = () => {
  const data = useStaticQuery( graphql`
    {
      allMdx(
        filter: {frontmatter: {mainCategories: {eq: "recipes"}}}
        sort: {fields: frontmatter___updated, order: DESC}  
        ) {
        nodes {
          id
          frontmatter {
            title
            type
            slug
            mainCategories
            by_course
            by_ingredient
            by_diet
            tags
            posted
            updated
            author
            portraitImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            landscapeImage {
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
    }
  `);
  return data.allMdx.nodes;
}

export default useGetAllRecipes;