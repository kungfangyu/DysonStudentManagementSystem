/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-18 17:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-18 17:42:24
 * @FilePath: /csc8019_team_project_frontend/src/components/BookingForm.jsx
 */

import * as React from 'react';
import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';
import FormGrid from '../style/formStyle';

const BookingForm = () => {
  const [moduleName, setModuleName] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);

  const handleModuleChange = (event) => {
    setModuleName(event.target.value);
  };

  const handleAvailableTimeChange = (event) => {
    setAvailableTime(event.target.value);
  };

  const moduleSelect = [
    {
      moduleId: '001',
      moduleName: 'CSC8012 Database',
    },
    {
      moduleId: '002',
      moduleName: 'CSC8011 Java',
    },
  ];

  return (
    <>
      <Container>
        <h3>Modules</h3>
      </Container>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
        space={2}
      >
        <Grid container spacing={1}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="modulesName">Modules Name</FormLabel>
            <Select
              displayEmpty
              value={moduleName}
              onChange={handleModuleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Modules</em>;
                }
                return selected;
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Available Time</em>
              </MenuItem>
              {moduleSelect.map((module) => (
                <MenuItem key={module.moduleId} value={module.moduleId}>
                  {module.moduleName}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>

          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="email">Available Time</FormLabel>
            <Select
              displayEmpty
              value={availableTime}
              onChange={handleAvailableTimeChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Available Time</em>;
                }
                return selected;
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Available Time</em>
              </MenuItem>
              {moduleSelect.map((module) => (
                <MenuItem key={module.moduleId} value={module.moduleId}>
                  {module.moduleName}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>
        </Grid>
      </Container>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
        space={2}
      >
        <Grid container spacing={1}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="modulesName">Modules Name</FormLabel>
            <Select
              displayEmpty
              value={moduleName}
              onChange={handleModuleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Modules</em>;
                }
                return selected;
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Available Time</em>
              </MenuItem>
              {moduleSelect.map((module) => (
                <MenuItem key={module.moduleId} value={module.moduleId}>
                  {module.moduleName}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>

          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="email">Booking Issue</FormLabel>
            <TextField
              placeholder="Type your issue here."
              multiline
              rows={2}
              maxRows={4}
            />
          </FormGrid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" endIcon={<SendIcon />} size="large">
          Send
        </Button>
      </Box>
    </>
  );
};

export default BookingForm;
