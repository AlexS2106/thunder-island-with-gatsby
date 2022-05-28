module.exports = {
   flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    siteUrl: "https://thunder-island.netlify.app/",
    title: "Thunder Island",
    author: "Alex",
    stack: "JAMstack",
    stackTech: ["Excel", "MDX", "React", "Gatsby", "Netlify CMS"]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [ `.mdx`, `.md` ],
         gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about",
        path: `${__dirname}/content/about/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "health",
        path: `${__dirname}/content/health`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: `${__dirname}/content/recipes`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolios",
        path: `${__dirname}/content/portfolios`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "english",
        path: `${__dirname}/content/english`,
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms"
    },
  ],
};

