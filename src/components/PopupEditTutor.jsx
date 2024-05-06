/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 02:24:39
 * @FilePath: /csc8019_team_project_frontend/src/components/PopupEditTutor.jsx
 */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { FormGrid } from '../style/formStyle';

const tutorSelect = [
  {
    value: 'Alice Smith',
  },
  {
    value: 'Michael Williams',
  },
  {
    value: 'Emily Brown',
  },
  {
    value: 'James Jones',
  },
];

const PopupEditStatus = ({ open, handlePopupEditClose }) => {
  const [tutor, setTutor] = React.useState('');
  const handleClose = () => {
    handlePopupEditClose && handlePopupEditClose();
  };

  const handleTutorChange = (event) => {
    setTutor(event.target.value);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { width: '350px' } }}
      >
        <DialogTitle id="alert-dialog-title">{'Edit Tutor'}</DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6}>
            <Select
              displayEmpty
              value={tutor}
              onChange={handleTutorChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select tutor</em>;
                }
                return selected;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {tutorSelect.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupEditStatus;
