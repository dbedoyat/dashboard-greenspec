'use client';
import React, {useState} from 'react';

import styles from './Toggle.module.css';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.toggleContainer}>
      <input
        type='checkbox'
        id='toggle'
        checked={isChecked}
        onChange={handleToggle}
        className={styles.toggleInput}
      />
      <label htmlFor='toggle' className={styles.toggleLabel}>
        <span className={styles.toggleHandle} />
      </label>
    </div>
  );
};

export default Toggle;
