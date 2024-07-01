import React from 'react';
import styles from './NewsCard.module.css';

const NewsCard = ({blog}) => {
  return (
    <div className={styles.wrapper}>
      <img src={blog.img1} alt='img'/>
      <div className={styles.content}>
        <div className={styles.categoryWrapper}>
        <span className={styles.category}>{blog.category} | {blog.date}</span>
        </div>
        <a href='www.google.com' target='_blank'><p>{blog.para}</p></a>
        <span className={styles.writerImg}>
            <img src={blog.img2} alt='img'/>
            <span>{blog.writer}</span>
        </span>
      </div>
    </div>
  )
}

export default NewsCard
