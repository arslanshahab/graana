import React from 'react';
import BlogItem from './BlogItem';
import { Button } from "../Button/Button"
import styles from "./BlogList.module.scss";
import { blogData } from "../../data/index"
const BlogList = () => {
  return (
    <div className={styles.container}>
      <h2>Graana Blogs</h2>
      <p>Trends and perspectives for buyers and investors</p>
      <div className={styles.blog_list}>
        {
          blogData.map((data) => {
            return <BlogItem
              img={data.img}
              bHead={data.bHead}
              bTitle={data.bTitle}
              bText={data.bText}
              bdImg={data.bdImg}
              bWriter={data.bWriter}
              bDate={data.bDate}
            />
          })
        }
      </div>

      <Button type="secondary" size="lg" title="VIEW ALL BLOGS" />

    </div>
  )
}

export default BlogList;