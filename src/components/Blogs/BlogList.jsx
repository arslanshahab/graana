import React from 'react';
import BlogItem from './BlogItem';
import styles from "./BlogList.module.scss";

const BlogList = () => {
  return (
    <div className={styles.container}>
      <h2>Graana Blogs</h2>
      <p>Trends and perspectives for buyers and investors</p>
      <div className={styles.blog_list}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  )
}

export default BlogList;