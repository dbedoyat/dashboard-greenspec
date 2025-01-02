import React from 'react';
import styles from './Welcome.module.css';

interface WelcomeProps {
  welcomeData: {
    greeting: string;
    message: string;
  };
  userName: string;
}

const Welcome = ({userName, welcomeData}: WelcomeProps) => {
  return (
    <div className={styles.welcome}>
      <h1>
        {welcomeData.greeting} {userName}
      </h1>
      <p> {welcomeData.message}</p>
    </div>
  );
};

export default Welcome;
