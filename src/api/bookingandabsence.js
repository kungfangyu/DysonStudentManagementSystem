/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-06 23:35:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-07 14:24:53
 * @FilePath: /csc8019_team_project_frontend/src/api/bookingandabsence.js
 */
import service from './axios';

export const postAbsenceRequest = async (requestData) => {
  return await service({
    url: `/absenceRequest`,
    method: 'post',
    data: requestData,
  });
};

export const getLessonTime = async (moduleId) => {
  return await service({
    url: `lesson/by-moduleID/${moduleId}`,
    method: 'get',
  });
};

export const getStudentTutor = async (studentID) => {
  return await service({
    url: `studentTutor/by-student/${studentID}`,
    method: 'get',
  });
};

export const getMeetingTime = async (staffID) => {
  return await service({
    url: `tutorStudentMeeting/${staffID}`,
    method: 'get',
  });
};

export const updateMeetingTime = async (staffID, meetingTime, requestData) => {
  return await service({
    url: `/tutorStudentMeeting/${staffID}/${meetingTime}`,
    method: 'put',
    data: requestData,
  });
};
