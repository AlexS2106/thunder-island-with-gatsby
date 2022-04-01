import { graphql, useStaticQuery } from "gatsby";


export default function useMetadata () {

  const { site } = useStaticQuery( graphql`
  query siteMeta {
  site {
    siteMetadata {
      title
      author
      stack
      stackTech
    }
  }
}
  `);

  return site.siteMetadata;

}


