/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-15 16:43:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-05 20:35:16
 * @FilePath: /csc8019_team_project_frontend/src/components/modules/PopupAddMaterial.jsx
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
import { useParams } from 'react-router-dom';
import { uploadFile } from '../../api/fileUpload';
import { FormGrid, VisuallyHiddenInput } from '../../style/formStyle';

const PopupAddMaterial = ({ open, handlePopupClose }) => {
  const { moduleId } = useParams();
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState('');
  const filepath = `module/${moduleId}/material`;
  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await uploadFile(selectedFile, filepath);
      setFileName(response.data.fileName);
      handleClose();
    } catch (error) {
      console.log('Error uploading file');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
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
        <DialogTitle id="alert-dialog-title">
          {'Upload Module Material'}
        </DialogTitle>
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
            {fileName && <p>Selected file: {fileName}</p>}

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

export default PopupAddMaterial;
