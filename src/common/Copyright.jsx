/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-16 00:45:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 00:47:50
 * @FilePath: /csc8019_team_project_frontend/src/common/Copyright.jsx
 */
import React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.dysoninstitute.ac.uk/">
        Dyson Institute
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
