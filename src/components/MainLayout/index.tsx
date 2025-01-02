'use client';

import {useDashboardContext} from '@/context/DashboardContext';
import styles from './MainLayout.module.css';

export default function ClientMain({children}: {children: React.ReactNode}) {
  const {isExpanded} = useDashboardContext();

  return (
    <main
      className={`${styles.main} ${
        isExpanded ? styles.collapsed : styles.expanded
      }`}>
      {children}
    </main>
  );
}
