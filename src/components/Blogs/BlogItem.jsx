import React from 'react';
import styles from "./BlogItem.module.scss";
const BlogItem = ({ img, bhead, btitle, btext, bdimg, bwriter, bdate }) => {
  return (
    <div className={styles.blog_item}>
      <div >
        <img src={img} alt={btitle} className={styles.img} />
      </div>
      <div className={styles.blog_body}>
        <div className={styles.blog_body_sec}>
          <div className={styles.blog_text}>
            <h6>{bhead}</h6>
            <h2>{btitle}</h2>
            <p>{btext}</p>
          </div>
          <div className={styles.blog_writer}>
            <div className={styles.blog_writer_img}>
              <img src={bdimg} alt={bwriter} />
            </div>
            <div className={styles.blog_writer_detail}>
              <h5>{bwriter}</h5>
              <span>{bdate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;