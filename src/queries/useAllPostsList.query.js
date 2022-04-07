import { graphql, useStaticQuery } from "gatsby";


export default function useAllPostsList () {

  const { allMdx } = useStaticQuery( graphql`
  query allSlugs {
        allMdx {
          nodes {
            slug
          }
        }
      }
  `);

  return allMdx;

}