import React from 'react';
import {Icon} from '@iconify/react';

import styles from './StatusBar.module.css';

interface StatusBarProps {
  statusBarData: {
    id: number;
    title: string;
    icon: string;
    notifications: number;
    color: string;
  }[];
}
const StatusBar = ({statusBarData}: StatusBarProps) => {
  return (
    <div className={styles.statusBar}>
      {statusBarData.map(({id, title, icon, notifications, color}) => (
        <div className={`${styles.item} ${styles[color]}`} key={id}>
          {icon && (
            <div className={styles.icon}>
              <Icon icon={`ph:${icon}`} className={styles.icon} ssr={true} />
            </div>
          )}
          <span className={styles.title}>{title} </span>
          <span className={`${styles.notifications} ${styles[color]}`}>
            {notifications}{' '}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
