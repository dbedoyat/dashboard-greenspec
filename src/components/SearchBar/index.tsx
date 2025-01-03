'use client';
import {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type='text'
        placeholder='Search for specific data...'
        className={isExpanded ? 'expanded' : ''}
      />
      <button className='toggle' onClick={handleToggle}>
        {isExpanded ? (
          <span className='close-icon'>X</span>
        ) : (
          <span className='search-icon'>Search</span>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
