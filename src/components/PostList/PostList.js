import React from 'react'
import Link from 'gatsby-link'
import styles from './postlist.module.sass'

const PostList = ({post}) => (
  <div className={styles.postItem} key={post.id}>
    <Link className={styles.postItemHeading} to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    <Link to={`/categories/${post.frontmatter.category}`} className={styles.postItemCategory}>
      {post.frontmatter.category}
    </Link>
    <div dangerouslySetInnerHTML={{__html: post.excerpt}}/>
  </div>
)

export default PostList
