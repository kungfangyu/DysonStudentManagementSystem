/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-27 22:26:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-30 16:48:35
 * @FilePath: /csc8019_team_project_frontend/src/provider/AuthProvider.jsx
 */

import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  console.log(
    "🚀 ~ AuthProvider ~ localStorage.getItem('accessToken'):",
    localStorage.getItem('accessToken'),
  );

  const setTokenAndSave = (newToken) => {
    setToken(newToken);
    localStorage.setItem('accessToken', newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: setTokenAndSave }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
