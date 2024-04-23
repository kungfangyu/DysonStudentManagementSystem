/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-23 18:30:59
 * @FilePath: /csc8019_team_project_frontend/src/components/PopupEditStatus.jsx
 */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { getStatusText } from '../helpers/helperFunction';
import FormGrid from '../style/formStyle';

const statusSelect = [
  {
    name: 'Register',
    value: 1,
  },
  {
    name: 'Enroll',
    value: 2,
  },
  {
    name: 'Suspend',
    value: 3,
  },
  {
    name: 'Withdraw',
    value: 4,
  },
];

const PopupEditStatus = ({
  open,
  handlePopupEditClose,
  initStatus,
  moduleId,
}) => {
  const [status, setStatus] = useState(initStatus);

  const handleClose = () => {
    handlePopupEditClose && handlePopupEditClose();
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { width: '300px' } }}
      >
        <DialogTitle id="alert-dialog-title">
          {'Edit Course Status'}
        </DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6}>
            <Select
              displayEmpty
              value={getStatusText(status)}
              onChange={handleStatusChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select status</em>;
                }
                return selected;
              }}
              sx={{
                mt: 2,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {statusSelect.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
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
