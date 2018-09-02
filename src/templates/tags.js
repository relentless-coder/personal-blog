import React from "react";
import styles from '../styles/tags.module.sass'
import PostList from '../components/PostList/PostList'

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges: posts, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <div className={styles.postsContainer}>
      <h1>{tagHeader}</h1>
	  {posts.map(({ node: post }) => (
        <PostList post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Tags;

export const query = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

