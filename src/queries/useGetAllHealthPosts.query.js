import { useStaticQuery, graphql } from "gatsby"

const useGetAllHealthPosts = () => {
  const data = useStaticQuery( graphql`
    {
      allMdx(filter: {frontmatter: {mainCategories: {eq: "health"}}}) {
        nodes {
          frontmatter {
            title
            type
            slug
            mainCategories
            subcategories
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
            associated
            excerpt
          }
        }
      }
    }
  `);
  return data.allMdx.nodes;
}

export default useGetAllHealthPosts;