'use client';
import React from 'react';
import Linker from '@/components/Linker';
import {useDashboardContext} from '@/context/DashboardContext';

import {Icon} from '@iconify/react';

import styles from './NavBar.module.css';

interface NavBarProps {
  navBarData: {
    id: number;
    title: string;
    icon: string;
    link: string;
  }[];
}
const NavBar = ({navBarData}: NavBarProps) => {
  const {isExpanded} = useDashboardContext();

  return (
    <nav
      className={`${styles.navBar} ${
        isExpanded ? styles.collapsed : styles.expanded
      } `}>
      <ul className={styles.list}>
        {navBarData.map(({id, title, icon, link}) => (
          <li className={styles.items} key={id}>
            <Linker
              className={styles.item}
              href={link}
              activeClassName='itemActive'>
              {icon && (
                <div className={styles.icon}>
                  <Icon
                    icon={`ph:${icon}`}
                    className={styles.icon}
                    ssr={true}
                  />
                </div>
              )}
              <span className={styles.title}>{title}</span>
            </Linker>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
