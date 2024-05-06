/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 23:22:36
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/PopupEditSyllabus.jsx
 */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';

import { FormGrid } from '../../style/formStyle';

const PopupEditSyllabus = ({ open, handlePopupClose }) => {
  const [value, setValue] = useState('');

  const handleClose = () => {
    handlePopupClose && handlePopupClose();
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
          {'Edit Module Syllabus'}
        </DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6}>
            <TextField
              multiline
              rows={4}
              maxRows={4}
              value={value}
              placeholder="Type here."
              onChange={(e) => setValue(e.target.value)}
            />
          </FormGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupEditSyllabus;
