module.exports = {
   flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    siteUrl: "https://thunder-island.netlify.app/",
    title: "Thunder Island Using Gatsby",
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
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: false,
        base64Width: 20,
        forceBase64Format: `png`, 
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
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
        name: "recipes",
        path: `${__dirname}/content/writing`,
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms"
    },
  ],
};

