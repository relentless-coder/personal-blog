const path = require('path')
const _ = require('lodash')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const tagTemplate = path.resolve('src/templates/tags.js')

  const setupBlogPost = (node, index, posts) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  }

  const setupTagPages = (tag => {
    console.log("about to be created")
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  });

  const parseResults = result => {
    const posts = result.data.allMarkdownRemark.edges
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    tags = _.uniq(tags)
    posts.forEach(({ node }, index) => setupBlogPost(node, index, posts))
    tags.forEach(setupTagPages)
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            frontmatter {
              path
              date
              category
              tags
            }
          }
        }
      }
    }
  `).then(parseResults)
}
