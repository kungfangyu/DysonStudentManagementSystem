/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-03 01:14:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-07 10:23:23
 * @FilePath: /csc8019_team_project_frontend/src/api/academicHistory.js
 */
import service from './axios';

export const getAcademicHistory = async (userID) => {
  return await service({
    url: `previousQualification/${userID}`,
    method: 'get',
  });
};

export const createAcademicHistory = async (data) => {
  return await service({
    url: `previousQualification/`,
    method: 'post',
    data: data,
  });
};
