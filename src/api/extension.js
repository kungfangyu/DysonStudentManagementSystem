/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-06 21:39:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 21:51:45
 * @FilePath: /csc8019_team_project_frontend/src/api/extension.js
 */
import service from './axios';

export const createExtensionRequest = async (bodyData) => {
  try {
    return await service({
      url: `/CourseworkExtensionRequest`,
      method: 'post',
      data: bodyData,
    });
  } catch (error) {
    console.error('Error creating extension request:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};
