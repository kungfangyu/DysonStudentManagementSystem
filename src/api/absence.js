/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-06 23:35:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 23:43:56
 * @FilePath: /csc8019_team_project_frontend/src/api/absence.js
 */
import service from './axios';

export const postAbsenceRequest = async (requestData) => {
  return await service({
    url: `/absenceRequest`,
    method: 'post',
    data: requestData,
  });
};
export const getLesson = async (moduleId) => {
  return await service({
    url: `lesson/by-moduleID/${moduleId}`,
    method: 'get',
  });
};
