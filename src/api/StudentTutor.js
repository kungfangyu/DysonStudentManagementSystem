import axios from 'axios';

const REST_API_BASE_URL_GET_BY_STUDENTID =
  'http://localhost:8080/api/studentTutor/by-student/';

export const getTutorFromStudentID = (student) =>
  axios.get(REST_API_BASE_URL_GET_BY_STUDENTID + student);
