/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-25 15:54:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-05 20:26:36
 * @FilePath: /csc8019_team_project_frontend/src/page/staff/modules/ModuleEdited.jsx
 */
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
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
import PopupAddAnnouncement from '../../../components/modules/PopupAddAnnouncement';
import PopupAddCoursework from '../../../components/modules/PopupAddCoursework';
import PopupAddMaterial from '../../../components/modules/PopupAddMaterial';
import PopupDeleteConfirm from '../../../components/modules/PopupDeleteConfirm';
import PopupEditIntro from '../../../components/modules/PopupEditIntro';
import { ModuleEditCardPaper } from '../../../style/cardStyle';
import theme from '../../../style/theme';

import { getModuleAnnouncements, getModuleDetails } from '../../../api/modules';
import { SIGNIN_URL } from '../../../data/data';

const ModuleEdited = () => {
  const { moduleId } = useParams();
  const [open, setOpen] = React.useState(true);
  const [popupAddAnnounceOpen, setPopupAddAnnounceOpen] = useState(false);
  const [popupAddMaterialOpen, setPopupAddMaterialOpen] = useState(false);
  const [popupAddCourseworkOpen, setPopupAddCourseworkOpen] = useState(false);
  const [popupEditIntro, setPopupEditIntro] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [announce, setAnnounce] = useState([]);
  const [description, setDescription] = useState('');

  const fetchModuleAnnouncements = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const response = await getModuleAnnouncements(moduleId);
        const results = response;
        setAnnounce(results);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId]);

  const fetchModuleDetails = useCallback(async () => {
    const token = localStorage.getItem('accessToken');

    try {
      if (token) {
        const response = await getModuleDetails(moduleId);
        const results = response;
        setDescription(results.moduleDescription);
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, [moduleId]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleAddAnnouncement = (moduleId) => {
    setPopupAddAnnounceOpen(true);
  };

  const handleAddMaterial = (moduleId) => {
    setPopupAddMaterialOpen(true);
  };

  const handleAddCoursework = (moduleId) => {
    setPopupAddCourseworkOpen(true);
  };

  const handleEditIntro = (moduleId) => {
    setPopupEditIntro(true);
  };

  const handleDelete = (itemId) => {
    // Here, you can implement the logic to delete the item with the specified ID
    console.log('Deleting item with ID:', itemId);
    // After deletion, close the delete confirmation popup
    setDeleteConfirmOpen(false);
  };

  useEffect(() => {
    fetchModuleDetails();
    fetchModuleAnnouncements();
  }, [fetchModuleAnnouncements, fetchModuleDetails]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav
          open={open}
          toggleDrawer={toggleDrawer}
          title={'Edit ModuleDetails'}
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
            <h3>Announcements List</h3>

            {announce.map((item) => {
              return (
                <ModuleEditCardPaper key={item.announcementID}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography>
                      {item.title}: {item.description}
                    </Typography>
                    <IconButton
                      onClick={() => {
                        setDeleteItemId(1);
                        setDeleteConfirmOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </ModuleEditCardPaper>
              );
            })}

            <IconButton
              disabled={announce.length >= 3}
              color="primary"
              sx={{ mt: 1 }}
              aria-label="create a new announcement record"
              onClick={() => handleAddAnnouncement(moduleId)}
            >
              <AddCircleIcon />
            </IconButton>
          </Container>
          <Container
            sx={{
              mb: 6,
            }}
          >
            <h3>Module Introductions</h3>
            <ModuleEditCardPaper>
              <Box
                sx={{
                  mt: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>{description}</Typography>

                <IconButton onClick={() => handleEditIntro(moduleId)}>
                  <EditIcon />
                </IconButton>
              </Box>
            </ModuleEditCardPaper>
          </Container>

          <Container
            sx={{
              mb: 6,
            }}
          >
            <h3>Material Upload</h3>
            <ModuleEditCardPaper>
              <Box
                sx={{
                  mt: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>Week 0</Typography>
                <Typography>Module Material</Typography>

                <IconButton
                  onClick={() => {
                    setDeleteItemId(1);
                    setDeleteConfirmOpen(true);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ModuleEditCardPaper>
            <IconButton
              color="primary"
              sx={{ mt: 1 }}
              aria-label="create a new material"
              onClick={() => handleAddMaterial(moduleId)}
            >
              <AddCircleIcon />
            </IconButton>
          </Container>

          <Container
            sx={{
              mb: 4,
            }}
          >
            <h3>Coursework Upload</h3>
            <ModuleEditCardPaper>
              <Box
                sx={{
                  mt: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>Week 0</Typography>
                <Typography>Coursework</Typography>

                <IconButton
                  onClick={() => {
                    setDeleteItemId(1);
                    setDeleteConfirmOpen(true);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ModuleEditCardPaper>
            <IconButton
              color="primary"
              aria-label="create a new coursework"
              sx={{ mt: 1 }}
              onClick={() => handleAddCoursework(moduleId)}
            >
              <AddCircleIcon />
            </IconButton>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
      <PopupAddAnnouncement
        moduleId={moduleId}
        open={popupAddAnnounceOpen}
        fetchModuleAnnouncements={fetchModuleAnnouncements}
        handlePopupClose={() => setPopupAddAnnounceOpen(false)}
      />
      <PopupEditIntro
        open={popupEditIntro}
        moduleId={moduleId}
        handlePopupClose={() => setPopupEditIntro(false)}
      />
      <PopupAddMaterial
        open={popupAddMaterialOpen}
        moduleId={moduleId}
        handlePopupClose={() => setPopupAddMaterialOpen(false)}
      />
      <PopupAddCoursework
        open={popupAddCourseworkOpen}
        moduleId={moduleId}
        handlePopupClose={() => setPopupAddCourseworkOpen(false)}
      />
      <PopupDeleteConfirm
        open={deleteConfirmOpen}
        handleClose={() => setDeleteConfirmOpen(false)}
        handleDelete={() => handleDelete(deleteItemId)}
      />
    </ThemeProvider>
  );
};

export default ModuleEdited;
