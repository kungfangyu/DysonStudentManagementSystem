/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-25 15:54:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 23:59:11
 * @FilePath: /csc8019_team_project_frontend/src/page/staff/modules/ModuleEdited.jsx
 */
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
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import PopupAddAnnouncement from '../../../components/modules/PopupAddAnnouncement';
import PopupAddCoursework from '../../../components/modules/PopupAddCoursework';
import PopupAddMaterial from '../../../components/modules/PopupAddMaterial';
import PopupDeleteConfirm from '../../../components/modules/PopupDeleteConfirm';
import PopupEditIntro from '../../../components/modules/PopupEditIntro';
import PopupEditSyllabus from '../../../components/modules/PopupEditSyllabus';
import { ModuleEditCardPaper } from '../../../style/cardStyle';
import theme from '../../../style/theme';

const ModuleEdited = () => {
  const { moduleId } = useParams();
  const [open, setOpen] = React.useState(true);
  const [popupAddAnnounceOpen, setPopupAddAnnounceOpen] = useState(false);
  const [popupAddMaterialOpen, setPopupAddMaterialOpen] = useState(false);
  const [popupAddCourseworkOpen, setPopupAddCourseworkOpen] = useState(false);
  const [popupEditIntro, setPopupEditIntro] = useState(false);
  const [popupEditSyllabus, setPopupEditSyllabus] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false); // State to manage the visibility of the delete confirmation popup
  const [deleteItemId, setDeleteItemId] = useState(null); // State to store the item ID for deletion

  const [intro, setIntro] = useState('');
  const [syllabus, setSyllabus] = useState('');

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

  const handleEditSyllabus = (moduleId) => {
    setPopupEditSyllabus(true);
  };

  const handleDelete = (itemId) => {
    // Here, you can implement the logic to delete the item with the specified ID
    console.log('Deleting item with ID:', itemId);
    // After deletion, close the delete confirmation popup
    setDeleteConfirmOpen(false);
  };

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
            <ModuleEditCardPaper>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>Announcement 1</Typography>
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
                <Typography>{intro}</Typography>

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
            <h3>Module Syllabus</h3>
            <ModuleEditCardPaper>
              <Box
                sx={{
                  mt: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>{syllabus}</Typography>

                <IconButton>
                  <EditIcon onClick={() => handleEditSyllabus(moduleId)} />
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
        open={popupAddAnnounceOpen}
        moduleId={moduleId}
        handlePopupClose={() => setPopupAddAnnounceOpen(false)}
      />
      <PopupEditIntro
        open={popupEditIntro}
        moduleId={moduleId}
        handlePopupClose={() => setPopupEditIntro(false)}
      />
      <PopupEditSyllabus
        open={popupEditSyllabus}
        moduleId={moduleId}
        handlePopupClose={() => setPopupEditSyllabus(false)}
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
