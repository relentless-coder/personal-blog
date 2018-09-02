import React from 'react'
import Link from 'gatsby-link'
import styles from './post.footer.module.sass'

const PostFooter = ({ prev, next, tags }) => (
  <div className={styles.containerFooter}>
    <div className={styles.footer}>
      {prev ? <Link to={prev.frontmatter.path} className={styles.prev}> <strong> &lt;&lt; </strong> Previous</Link> : null}
      {next ? <Link to={next.frontmatter.path} className={styles.next}>Next <strong> &gt;&gt; </strong></Link> : null}
    </div>
    <div className={styles.containerTags}>
      {tags.map(el => (
        <Link to={`/tags/${_.kebabCase(el)}`} className={styles.linkTag}>{el.toUpperCase()}</Link>
      ))}
    </div>
  </div>
)

export default PostFooter
