import { graphql, useStaticQuery } from "gatsby";


export default function useGetAllSlugs () {

  const { allMdx } = useStaticQuery( graphql`
  query allSlugs {
    allMdx {
    nodes {
      slug
      frontmatter {
        mainCategories
      }
    }
  }
}
  `);

  return allMdx.nodes;

}