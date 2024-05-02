/*
 * @Author: Fangyu Kung
 * @Date: 2024-04-30 17:48:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-02 11:18:14
 * @FilePath: /csc8019_team_project_frontend/src/api/modules.js
 */
import service from './axios';

export const getStudentModules = async (studentID) => {
  return await service({
    url: `studentModuleGrade/getModulesDetailsByStudentID/${studentID}`,
    method: 'get',
  });
};

export const getCourseworks = async (moduleID) => {
  return await service({
    url: `/Coursework/${moduleID}`,
    method: 'get',
  });
};

export const getCoursesworkDetails = async (moduleID, courseworkID) => {
  return await service({
    url: `/Coursework/${moduleID}/${courseworkID}`,
    method: 'get',
  });
};

export const getExams = async (moduleID) => {
  return await service({
    url: `/by-moduleID/${moduleID}`,
    method: 'get',
  });
};
