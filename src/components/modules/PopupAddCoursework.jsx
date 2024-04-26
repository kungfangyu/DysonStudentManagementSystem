/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-26 23:03:38
 * @FilePath: /csc8019_team_project_frontend/src/components/PopupAddCoursework.jsx
 */
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';
import { FormGrid, VisuallyHiddenInput } from '../../style/formStyle';

const PopupAddCoursework = ({ open, handlePopupClose }) => {
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
        <DialogTitle id="alert-dialog-title">{'Upload Coursework'}</DialogTitle>
        <DialogContent>
          <FormGrid item xs={12} md={6}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Publish"
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

export default PopupAddCoursework;
