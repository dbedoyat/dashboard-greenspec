'use client';
import React from 'react';
import {useDashboardContext} from '@/context/DashboardContext';

import {InlineIcon} from '@iconify/react';

import styles from './Hamburger.module.css';

const Hamburger = () => {
  const {toggleExpanded} = useDashboardContext();

  return (
    <button className={styles.hamburger} onClick={toggleExpanded}>
      <div className={styles.icon}>
        <InlineIcon className={styles.icon} icon={`ph:list`} />
      </div>
    </button>
  );
};

export default Hamburger;
