
import React, { useState, createContext, useEffect } from 'react';

export let userdetails = createContext();

const UserContex = ({ children }) => {
  let [user, setUser] = useState(() => {
    let savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  let logindata = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  let logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <userdetails.Provider value={{ logindata, user, logout }}>
      {children}
    </userdetails.Provider>
  );
};

export default UserContex;
