/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-29 21:18:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-29 21:18:33
 * @FilePath: /csc8019_team_project_frontend/src/components/Loading.jsx
 */
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
