import React from 'react';
import BlogItem from './BlogItem';
import { Button } from "../Button/Button"
import styles from "./BlogList.module.scss";
import bimg1 from "../../assets/images/Hospital-Emergency-Block.webp";
import bimg2 from "../../assets/images/blogimage2.webp";
import bimg3 from "../../assets/images/blogimage3.webp"
import iconImg from "../../assets/images/blogUserDummyImage.svg"

const BlogList = () => {
  return (
    <div className={styles.container}>
      <h2>Graana Blogs</h2>
      <p>Trends and perspectives for buyers and investors</p>
      <div className={styles.blog_list}>
        <BlogItem
          img={bimg1}
          bhead="Article"
          btitle="Ganga Ram Hospital Lahore:"
          btext="Ganga Ram Hospital is a premier healthcare institute that was established in 1921 by Sir Ganga Ram, a Phlianthropist and..."
          bdimg={iconImg}
          bwriter="Mariana Aslam"
          bdate="April 19,2023 7min read"
        />
        <BlogItem
          img={bimg2}
          bhead="Article"
          btitle="Karachi Cantt Station: History,..."
          btext="Karachi Cantt Station is one of the most important and busiest railway station in Pakistan, located near Dr. Daudpota Road,..."
          bdimg={iconImg}
          bwriter="Mariana Aslam"
          bdate="April 19,2023 8min read"
        />
        <BlogItem
          img={bimg3}
          bhead="Article"
          btitle="Dubai Introduces Service to Verify..."
          btext="ISLAMABAD: Dubai Land Department (DLD) has announced the launch of a new electronic service called Madmoun,which aims to..."
          bdimg={iconImg}
          bwriter="Laila Waqar"
          bdate="April 19,2023 1min read"
        />
      </div>

      <Button type="secondary" size="lg" title="VIEW ALL BLOGS" />

    </div>
  )
}

export default BlogList;