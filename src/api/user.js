/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-01 15:45:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 01:12:17
 * @FilePath: /csc8019_team_project_frontend/src/api/user.js
 */
import service from './axios';

export const getUserPrimaryData = async (userID) => {
  return await service({
    url: `userPrimaryData/${userID}`,
    method: 'get',
  });
};

export const getUserEmergencyData = async (userID) => {
  return await service({
    url: `userEmergencyContact/${userID}`,
    method: 'get',
  });
};
