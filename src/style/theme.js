/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-15 02:01:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-23 14:45:55
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
      main: '#00695c',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

export default theme;
