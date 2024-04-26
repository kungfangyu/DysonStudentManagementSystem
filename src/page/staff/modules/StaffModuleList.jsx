/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-15 14:01:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 23:05:45
 * @FilePath: /csc8019_team_project_frontend/src/page/staff/modules/StaffModuleList.jsx
 */
import * as React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import ModuleCard from '../../../components/modules/ModuleCard';
import theme from '../../../style/theme';

const moduleData = [
  {
    moduleId: '01',
    moduleName: 'CSC8019 Advance Java',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
  {
    moduleId: '02',
    moduleName: 'CSC8011 Database',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
  {
    moduleId: '03',
    moduleName: 'CSC8011 Database',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
  {
    moduleId: '04',
    moduleName: 'CSC8011 Database',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
  {
    moduleId: '05',
    moduleName: 'CSC8011 Database',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
  {
    moduleId: '06',
    moduleName: 'CSC8011 Database',
    image: '../../../images/moduleImage01.avif',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    link: '/staff/modules/moduleId',
  },
];

const StaffModuleList = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav open={open} toggleDrawer={toggleDrawer} title={'Module List'} />
        <Aside variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <AsideItems />
        </Aside>
        <Box
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container
            sx={{
              mt: 4,
              mb: 4,
            }}
          >
            <ModuleCard moduleData={moduleData} />
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default StaffModuleList;
