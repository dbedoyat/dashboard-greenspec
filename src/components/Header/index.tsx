import React from 'react';
import Hamburger from '@/components/Hamburger';
import styles from './Header.module.css';

interface PageDataProps {
  pageData: {
    title: string;
  };
}

const Header = ({pageData}: PageDataProps) => {
  return (
    <header className={styles.header}>
      <Hamburger />
      <h1 className={styles.title}>{pageData.title}</h1>
    </header>
  );
};

export default Header;
