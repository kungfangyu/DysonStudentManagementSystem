/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-03 13:53:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-03 14:08:22
 * @FilePath: /csc8019_team_project_frontend/src/api/timetable.js
 */
import service from './axios';

export const getStudentTimeTable = async (userID) => {
  return await service({
    url: `studentLessonAllocation/lessonInfo-by-studentID/${userID}`,
    method: 'get',
  });
};
