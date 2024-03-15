/**
 * @author Fangyu Kung
 * @create date 2024-03-15 02:20:07
 * @modify date 2024-03-15 02:20:07
 * @desc Modify the website theme
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
