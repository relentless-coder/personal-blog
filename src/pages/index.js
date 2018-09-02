import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PostList from '../components/PostList/PostList'
import styles from '../styles/index.module.sass'

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className={styles.postsContainer}>
      {posts.map(({ node: post }) => (
        <PostList post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            category
          }
        }
      }
    }
  }
`
