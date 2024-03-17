/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-15 02:01:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-17 15:54:00
 * @FilePath: /csc8019_team_project_frontend/src/style/theme.js
 */

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
