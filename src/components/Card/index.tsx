// components/Card.tsx
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  color?: string;
  bg?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  color,
  bg,
  onClick,
  ...props
}) => {
  return (
    <div
      style={{backgroundColor: bg}}
      className={styles.card}
      onClick={onClick}
      {...props}>
      <div className={styles.content}>
        {title && (
          <h2 style={{color: color}} className={styles.title}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
