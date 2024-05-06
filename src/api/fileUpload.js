/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-04 22:17:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-05 17:36:35
 * @FilePath: /csc8019_team_project_frontend/src/api/fileUpload.js
 */
import service from './axios';

// Function to upload a file

export const uploadFile = async (file, filepath) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('filepath', filepath);
  return await service({
    url: '/file',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
