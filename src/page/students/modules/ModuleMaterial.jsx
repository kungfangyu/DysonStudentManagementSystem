/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-20 22:47:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-21 15:43:12
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/ModuleMaterial.jsx
 */
import * as React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import theme from '../../../style/theme';

const ModuleMaterial = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  const weeks = [
    {
      week: 'Week 0',
      materials: [
        { name: 'Material 1', fileUrl: '/path/to/week0_material1.pdf' },
        { name: 'Material 2', fileUrl: '/path/to/week0_material2.pdf' },
      ],
      fileUrl: '/path/to/week0_material1.pdf',
    },
    {
      week: 'Week 1',
      materials: [
        { name: 'Material 1', fileUrl: '/path/to/week1_material1.pdf' },
        { name: 'Material 2', fileUrl: '/path/to/week1_material2.pdf' },
      ],
      fileUrl: '/path/to/week1_material1.pdf',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={'Module Material'}
        />
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
            {weeks.map((weekItem, index) => (
              <Accordion key={index} defaultExpanded={index === 0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  {weekItem.week}
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {weekItem.materials.map((material, materialIndex) => (
                      <Box
                        key={materialIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingRight: '24px',
                          justifyContent: 'space-between',
                        }}
                      >
                        <li>{material.name}</li>
                        <IconButton
                          edge="end"
                          aria-label="download"
                          onClick={() => handleDownload(material.fileUrl)}
                        >
                          <CloudDownloadIcon />
                        </IconButton>
                      </Box>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ModuleMaterial;
