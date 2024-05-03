/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-03 01:14:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 01:15:51
 * @FilePath: /csc8019_team_project_frontend/src/api/academicHistory.js
 */
import service from './axios';

export const getAcademicHistory = async (userID) => {
  return await service({
    url: `previousQualification/${userID}`,
    method: 'get',
  });
};
