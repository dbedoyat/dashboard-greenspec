// components/Card.tsx
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({title, children, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
