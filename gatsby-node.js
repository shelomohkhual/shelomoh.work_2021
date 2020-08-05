exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic("There was a problem loading your projects or Product!");
    return;
  }

  const projects = result.data.allProjectsJson.edges;
  const product = result.data.allProductsJson.edges;

  projects.forEach(({ node: project }) => {
    const slug = project.slug;

    actions.createPage({
      path: `/work/${slug}/`,
      component: require.resolve("./src/templates/project-template.tsx"),
      context: {
        slug,
      },
    });
  });
  product.forEach(({ node: product }) => {
    const slug = product.slug;

    actions.createPage({
      path: `/shop/${slug}/`,
      component: require.resolve("./src/templates/product-detail-template.tsx"),
      context: {
        slug,
      },
    });
  });
};
