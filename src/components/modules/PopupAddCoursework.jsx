/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-02 10:44:36
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/PopupAddCoursework.jsx
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
import { useState } from 'react';
import { FormGrid, VisuallyHiddenInput } from '../../style/formStyle';

const PopupAddCoursework = ({ open, handlePopupClose }) => {
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Publish"
            />
          </FormGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpload} autoFocus variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupAddCoursework;
