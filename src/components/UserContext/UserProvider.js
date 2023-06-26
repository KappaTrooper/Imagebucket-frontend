import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the authenticated user's username from the backend
    axios
      .get('http://localhost:9001/auth/userinfo', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authentication token in the request headers
        },
      })
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('Username:', username);

  return <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
