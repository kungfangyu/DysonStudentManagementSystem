/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-06 12:42:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-06 12:43:45
 * @FilePath: /csc8019_team_project_frontend/src/api/courseOperation.js
 */
import service from './axios';

export const getCourseOperation = async (userID) => {
  return await service({
    url: `/studentModuleGrade/getStudentModuleInfo/${userID}`,
    method: 'get',
  });
};
