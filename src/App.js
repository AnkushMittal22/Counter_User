import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import SortButton from './components/SortButton';
import './App.css';

function App() {
  const [countdownTime, setCountdownTime] = useState(60);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [pastSearches, setPastSearches] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setPastSearches([...pastSearches, searchTerm]);
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers];
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(sortedUsers);
  };

  return (
    <div className="App">
      <CountdownTimer initialTime={countdownTime} />
      <SearchBar onSearch={handleSearch} pastSearches={pastSearches} />
      <SortButton onSort={handleSort} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
