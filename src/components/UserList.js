import React from 'react';
import styles from './UserList.module.css';
 

const UserList = ({ users }) => {
  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.userlistcontainer}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={styles.userlistitem}>
            Name: {user.name}
            <br />
            Username: {user.username}
            <br />
            Email: {user.email}
            <br />
            Address:
            <br />
            Street: {user.address.street}
            <br />
            City: {user.address.city}
            <br />
            Phone: {user.phone}
            <br />
            Company: {user.company.name}
          </li>
        ))}
      </ul>
      <button onClick={refreshPage}>Refresh Page</button>
    </div>
  );
};

export default UserList;
