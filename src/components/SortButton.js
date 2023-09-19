import React from 'react';
import styles from './SortButton.module.css';

const SortButton = ({ onSort }) => {
  return (
    <div className={styles.sortbuttoncontainer}>
      <button onClick={onSort} className={styles.sortbutton}>
        Sort by Name
      </button>
    </div>
  );
};

export default SortButton;
