/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-11 15:28:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-04 18:07:31
 * @FilePath: /csc8019_team_project_frontend/src/page/staff/studentList/StudentList.jsx
 */
import { useCallback, useEffect, useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import { getStaffModules } from '../../../api/modules';
import { getStudentList } from '../../../api/studentList';
import Copyright from '../../../common/Copyright';
import Aside from '../../../common/aside/Aside';
import AsideItems from '../../../common/aside/AsideItems';
import Nav from '../../../common/aside/Nav';
import StudentListTable from '../../../components/StudentListTable';
import { SIGNIN_URL } from '../../../data/data';
import { parseJwt } from '../../../helpers/jwt';
import { FormGrid } from '../../../style/formStyle';
import theme from '../../../style/theme';

const StudentList = () => {
  const [open, setOpen] = useState(true);
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState('');

  const [selectedModuleName, setSelectedModuleName] = useState('');

  const [studentList, setStudentList] = useState([]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleModuleChange = (event) => {
    const selectedModuleId = event.target.value;
    const selectedModule = modules.find(
      (module) => module.moduleID === selectedModuleId,
    );
    setSelectedModule(selectedModuleId);
    setSelectedModuleName(selectedModule.moduleName);
    fetchStudentList(selectedModuleId);
  };

  const fetchStudentList = useCallback(
    async (moduleId) => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token && moduleId !== '') {
          const response = await getStudentList(moduleId);
          setStudentList(response);
        } else {
          window.location.href = SIGNIN_URL;
        }
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    },
    [selectedModule],
  );

  useEffect(() => {
    // fetch default module and student list
    const fetchDefaultModule = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          const parseToken = parseJwt(token);
          const response = await getStaffModules(parseToken.userID);
          const moduleArray = Object.values(response);
          if (moduleArray.length > 0) {
            const defaultModuleId = moduleArray[0].moduleID;
            setSelectedModule(defaultModuleId);
            setSelectedModuleName(moduleArray[0].moduleName);
            await fetchStudentList(defaultModuleId);
          }
          setModules(moduleArray);
        } else {
          window.location.href = SIGNIN_URL;
        }
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchDefaultModule();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Nav open={open} toggleDrawer={toggleDrawer} title="Student List" />
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
            <Grid container spacing={2}>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="module">Modules Name</FormLabel>
                <Select
                  displayEmpty
                  value={selectedModule}
                  onChange={handleModuleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (!selected || selected === '') {
                      return <em>Select Module</em>;
                    }
                    return selectedModule + '-' + selectedModuleName;
                  }}
                  sx={{
                    mt: 2,
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {modules &&
                    modules.map((module) => (
                      <MenuItem key={module.moduleID} value={module.moduleID}>
                        {module.moduleID} - {module.moduleName}
                      </MenuItem>
                    ))}
                </Select>
              </FormGrid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 4,
              }}
            >
              <StudentListTable studentList={studentList} />
            </Grid>
          </Container>

          <Copyright sx={{ pt: 4, pb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default StudentList;
