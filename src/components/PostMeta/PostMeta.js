import React from 'react'
import Link from 'gatsby-link'
import styles from './post.meta.module.sass'

const PostMeta = ({meta}) => (
  <div className={styles.containerPostMeta}>
    <div className={styles.postMeta}>
      <p>{meta.date}</p>
      <Link to={`/categories/${meta.category}`}>
        {meta.category.toUpperCase()}
      </Link>
    </div>
    <h1 className="blog-post__heading">{meta.title}</h1>
  </div>
)

export default PostMeta
