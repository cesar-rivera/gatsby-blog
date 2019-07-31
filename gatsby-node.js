const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentstackArticles {
        nodes {
          url
          locale
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: "blog" + node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          locale: "en-us"
        },
      })
    })
    result.data.allContentstackArticles.nodes.forEach(node => {
      createPage({
        path: (node.locale === "es-mx" ? "es-mx" : "en-us") + "/blog" + node.url + "/",
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.url,
          locale: node.locale
        }
      })
    })
  })
}