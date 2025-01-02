import React from 'react';
import Hamburger from '@/components/Hamburger';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Hamburger />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Header;
