import axios from 'axios';

const REST_API_BASE_URL_GET_BY_STAFFID =
  'http://localhost:8080/api/tutorStudentMeeting/';

export const getTimesFromStaffID = (staff) =>
  axios.get(REST_API_BASE_URL_GET_BY_STAFFID + staff);
