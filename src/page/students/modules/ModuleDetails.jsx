/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-05 06:45:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-22 22:52:25
 * @FilePath: /csc8019_team_project_frontend/src/page/students/modules/ModuleDetails.jsx
 */
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import theme from '../../../style/theme';

const ModuleDetails = () => {
  const { moduleId } = useParams();

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const moduleDetails = {
    moduleId: '01',
    moduleName: 'CSC8019 Advance Java',
    moduleIntroduction:
      'Module Introductions Module Introductions Module Introductions Module Introductions Module Introductions Module IntroductionsModule Introductions',
    moduleSyllabus:
      'Basic principles of concurrent programming. Thread synchronisation mechanisms. Challenges of concurrent programming such as interference and deadlocks. Concurrent programming synchronisation problems: Producer/Consumer problem, Readers/Writers problem. See the syllabus for information aboutthe module leader and other staff, contact hours, learning outcomes and assessments.',
    announcement: [
      { announcement: 'Module announcements', postedTime: '09/04/2024' },
      { announcement: 'Module announcements', postedTime: '10/04/2024' },
      { announcement: 'Module announcements', postedTime: '13/04/2024' },
    ],
    relatedLink: [
      {
        title: 'Syllabus',
        link: `/${moduleId}/syllabus`,
        image: '/images/moduleMaterial.jpg',
      },
      {
        title: 'Materials',
        link: `/${moduleId}/material`,
        image: '/images/moduleMaterial.jpg',
      },
      {
        title: 'Assignments and Exams',
        link: `/${moduleId}/assignmentandexam`,
        image: '/images/moduleMaterial.jpg',
      },
    ],
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav open={open} toggleDrawer={toggleDrawer} title={'ModuleName'} />
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
            <h2>Recent Announcements</h2>
            {moduleDetails.announcement.map((items, index) => {
              return (
                <List
                  sx={{ width: '100%', maxWidth: 360, padding: 0 }}
                  key={index}
                >
                  <ListItem>
                    <ListItemText
                      primary={items.announcement}
                      secondary={items.postedTime}
                    />
                  </ListItem>
                </List>
              );
            })}

            <Box>
              <h2>Welcome to {moduleDetails.moduleName}</h2>
              <Typography
                variant="body1"
                color="initial"
                sx={{ padding: '0 16px' }}
              >
                {moduleDetails.moduleIntroduction}
              </Typography>
            </Box>
            <Box>
              <h2>Syllabus</h2>
              <Typography
                variant="body1"
                color="initial"
                sx={{ padding: '0 16px' }}
              >
                {moduleDetails.moduleSyllabus}
              </Typography>
            </Box>
            <Grid container sx={{ justifyContent: 'space-around' }}>
              {moduleDetails.relatedLink.map((items, index) => {
                return (
                  <Link href={`${items.link}`} underline="none" key={index}>
                    <Card
                      sx={{ maxWidth: 'auto', width: 345, mt: 3 }}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={items.title}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={items.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {items.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                );
              })}
            </Grid>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ModuleDetails;
