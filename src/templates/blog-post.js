import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import styles from '../styles/blog.post.module.sass'
import _ from 'lodash'
import PostMeta from '../components/PostMeta/PostMeta'
import PostFooter from '../components/PostFooter/PostFooter'

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { prev, next } = pathContext
  return (
    <div>
      <Helmet
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
      />
      <div className={styles.blogPostContainer}>
        <PostMeta meta={post.frontmatter} />
        <div
          className="blog-post__container"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <PostFooter tags={post.frontmatter.tags} prev={prev} next={next} />
      </div>
    </div>
  )
}

export default Template

export const query = graphql`
  query BlogPostsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        category
        tags
        title
        keywords
        description
      }
    }
  }
`
