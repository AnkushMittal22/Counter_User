import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pastSearches, setPastSearches] = useState([]);
  const [showPastSearches, setShowPastSearches] = useState(false);

  useEffect(() => {
    const savedSearches = localStorage.getItem('pastSearches');
    if (savedSearches) {
      setPastSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    onSearch(searchTerm);
    setSearchTerm('');
    setPastSearches((prevSearches) => [...prevSearches, searchTerm]);
    localStorage.setItem(
      'pastSearches',
      JSON.stringify([...pastSearches, searchTerm])
    );
    setShowPastSearches(false); // Reset showPastSearches when a new search is performed
  };



  const handleShowPastSearches = () => {
    setShowPastSearches((prevState) => !prevState); // Toggle showPastSearches
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchcontainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchinput}
      />
      <button onClick={handleSearch} className={styles.searchbutton}>
        Search
      </button>
      
      <button onClick={handleShowPastSearches} className={styles.togglebutton}>
        {showPastSearches ? 'Hide Past Searches' : 'Show Past Searches'}
      </button>
      {showPastSearches && (
        <div className={styles.pastsearchescontainer}>
          <h3 className={styles.pastsearchheader}>Past Searches</h3>
          <ul className={styles.pastsearchlist}>
            {pastSearches.map((search, index) => (
              <li key={index} className={styles.pastsearch}>
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
