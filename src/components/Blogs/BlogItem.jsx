import React from 'react';
import img from "../../assets/images/Hospital-Emergency-Block.webp";
import icon from "../../assets/images/blogUserDummyImage.svg"
import styles from "./BlogItem.module.scss";
const BlogItem = () => {
  return (
    <div className={styles.blog_item}>
      <div >
        <img src={img} alt="Hospital Emergency block" className={styles.img}/>
      </div>
      <div className={styles.blog_body}>
      <div className={styles.blog_body_sec}>
        <div className={styles.blog_text}>
          <h6>Article</h6>
          <h2>Ganga Ram Hospital Lahore:</h2>
          <p>Ganga Ram Hospital is a premier healthcare institute that was established in 1921 by Sir Ganga Ram, a Phlianthropist and...</p>
        </div>
        <div className={styles.blog_writer}>
           <div className={styles.blog_writer_img}>
             <img src={icon} alt="dummy icon" />
           </div>
           <div className={styles.blog_writer_detail}>
            <h5>Mariana Aslam</h5>
            <span>April 19,2023 7min read</span>
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;