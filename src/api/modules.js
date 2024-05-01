/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-30 17:48:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-01 11:56:19
 * @FilePath: /csc8019_team_project_frontend/src/api/modules.js
 */
import service from './axios';

export const getStudentModules = async (studentID) => {
  return await service({
    url: `studentModuleGrade/getModulesDetailsByStudentID/${studentID}`,
    method: 'get',
  });
};
