import React from 'react';
import {Icon} from '@iconify/react';

import styles from './Farms.module.css';

interface FarmsProps {
  farmsData: {
    id: number;
    title: string;
    icon: string;
    status: string;
  }[];
}

const statusIcons: {[key: string]: string} = {
  active: 'ph:check-circle',
  acquit: 'ph:info',
  ondelay: 'ph:clock',
};

const Farms = ({farmsData}: FarmsProps) => {
  return (
    <ul className={styles.farms}>
      {farmsData.map(({id, title, icon, status}) => (
        <li className={styles.items} key={id}>
          {icon && (
            <div className={styles.icon}>
              <Icon icon={`ph:${icon}`} className={styles.icon} ssr={true} />
            </div>
          )}
          <span className={styles.title}>{title}</span>

          {status && (
            <div className={styles.icon}>
              <Icon
                icon={statusIcons[status] || 'ph:question'}
                className={` ${styles.icon} ${styles.status} ${styles[status]}`}
                ssr={true}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Farms;
