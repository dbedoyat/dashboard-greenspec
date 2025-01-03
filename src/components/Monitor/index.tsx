import React from 'react';
import styles from './Monitor.module.css';
const Monitor = () => {
  return (
    <div className={styles.grid}>
      <div className={`${styles.item1} ${styles.items}`}>
        <strong>Title</strong>
      </div>
      <div className={`${styles.item2} ${styles.items}`}>
        <strong>Title</strong>
      </div>
      <div className={`${styles.item3} ${styles.items}`}>
        <strong>Title</strong>
      </div>
      <div className={`${styles.item4} ${styles.items}`}>
        <strong>Title</strong>
      </div>
    </div>
  );
};

export default Monitor;
