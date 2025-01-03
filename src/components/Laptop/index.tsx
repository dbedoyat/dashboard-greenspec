'use client';
import React from 'react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

import styles from './Laptop.module.css';

const Laptop = () => {
  return (
    <div className={styles.laptop}>
      <DotLottieReact src='/laptop.lottie' loop autoplay />{' '}
    </div>
  );
};

export default Laptop;
