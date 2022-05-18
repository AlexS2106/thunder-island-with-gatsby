import { useStaticQuery, graphql } from "gatsby"

const useGetAllPosts = () => {
  const data = useStaticQuery( graphql`
    {
      allMdx(
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

export default useGetAllPosts;