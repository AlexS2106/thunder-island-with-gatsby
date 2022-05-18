const path = require( 'path' );

module.exports.createPages = async ( { graphql, actions, reporter } ) => {

  const { createPage } = actions;

  ///////Single Recipe Post
  const recipes = await graphql( `
query allRecipeSlugs {
  allMdx( filter: {frontmatter: {mainCategories: {eq: "recipes"}}} ) {
    nodes {
      frontmatter {
        x_id
        slug
        associated
      }
    }
  }
}
  `);
  // Handle errors
  if ( recipes.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query for recipes.` );
    return;
  };

  recipes.data.allMdx.nodes.forEach( node => {
    createPage( {
      component: path.resolve( "./src/templates/recipeTemplate.js" ),
      path: `recipes/${ node.frontmatter.slug }`,
      context: {
        x_id: node.frontmatter.x_id,
        slug: node.frontmatter.slug,
        associated: node.frontmatter.associated,
      }
    } );
  } );
  ///////Single Health Post
  const health = await graphql( `
query allHealthSlugs {
  allMdx(filter: {frontmatter: {mainCategories: {eq: "health"}}}) {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}
  `);
  // Handle errors
  if ( health.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query for health docs.` );
    return;
  };

  health.data.allMdx.nodes.forEach( node => {
    createPage( {
      component: path.resolve( "./src/templates/healthTemplate.js" ),
      path: `health/${ node.frontmatter.slug }`,
      context: {
        slug: node.frontmatter.slug,
      }
    } );
  } );
  
    ///////Single Writing Post (NOT poems or the "ongoing writing post")
  const writing = await graphql( `
query allWritingSlugs {
  allMdx(
    filter: {frontmatter: {subcategories: {eq: "writing"}, type: {nin: "poem"}}}
    ) {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}
  `);
  // Handle errors
  if ( writing.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query for writing docs.` );
    return;
  };

  writing.data.allMdx.nodes.forEach( node => {
    createPage( {
      component: path.resolve( "./src/templates/writingTemplate.js" ),
      path: `portfolio/${ node.frontmatter.slug }`,
      context: {
        slug: node.frontmatter.slug,
      }
    } );
  } );

      ///////Single Poem Post
  const poems = await graphql( `
query allPoemsSlugs {
  allMdx(
    filter: {frontmatter: {subcategories: {eq: "writing"}, type: {in: "poem"}}}
    ) {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}
  `);
  // Handle errors
  if ( poems.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query for poem docs.` );
    return;
  };

  poems.data.allMdx.nodes.forEach( node => {
    createPage( {
      component: path.resolve( "./src/templates/poemTemplate.js" ),
      path: `portfolio/${ node.frontmatter.slug }`,
      context: {
        slug: node.frontmatter.slug,
      }
    } );
  } );

  ///////Front page with multiple posts and pagination
  const postList = await graphql( `
query allPosts {
  allMdx(
    sort: { fields: [frontmatter___updated], order: DESC}
    filter: {frontmatter: {type: {eq: "post"}}}
    limit: 1000
  ) {
    edges {
      node {
        id
        frontmatter {
          slug
        }
      }
    }
  }
}
`);
  // Handle errors
  if ( postList.errors ) {
    reporter.panicOnBuild( `Error while running GraphQL query for all the posts for the blog component template.` );
    return;
  };

  const posts = postList.data.allMdx.edges;
  const postsPerPage = 5;
  const postsNumPages = Math.ceil( posts.length / postsPerPage );

  Array.from( { length: postsNumPages } ).forEach( ( _, index ) => {
    createPage( {
      component: path.resolve( "./src/templates/homeTemplate.js" ),
      path: index === 0 ? `/` : `/${ index + 1 }`,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        postsNumPages,
        currentPage: index + 1,
      }
    } );
  } );

}

///silence the webpack warning - this might not be the best idea however
module.exports.onCreateWebpackConfig = ({
    stage,
    actions,
    getConfig,
}) => {
  actions.setWebpackConfig( {
    resolve: {
      modules: [ 'node_modules', path.resolve( __dirname, 'src' ) ],
      alias: {
        'basic-info': path.resolve( __dirname, 'src/app/routes/basic-info' ),
        'situation-analysis': path.resolve( __dirname, 'src/app/routes/situation-analysis' ),
        'select-drivers': path.resolve( __dirname, 'src/app/routes/select-drivers' ),
        'define-vision': path.resolve( __dirname, 'src/app/routes/define-vision' ),
        'rate-drivers': path.resolve( __dirname, 'src/app/routes/rate-drivers' ),
        'affinity-groups': path.resolve( __dirname, 'src/app/routes/affinity-groups' ),
        'define-objectives': path.resolve( __dirname, 'src/app/routes/define-objectives' ),
        'create-roadmap': path.resolve( __dirname, 'src/app/routes/create-roadmap' ),
      }
    },

    devtool: 'eval-source-map',
  } );

    if (stage === 'build-javascript' || stage === 'develop') {
      const config = getConfig();

      const miniCssExtractPlugin = config.plugins.find(
        plugin => ( plugin.constructor.name === 'MiniCssExtractPlugin' )
      );

      if ( miniCssExtractPlugin ) miniCssExtractPlugin.options.ignoreOrder = true;

      actions.replaceWebpackConfig( config );
  };
}
