import axios from 'axios';

const REST_API_BASE_URL_ABSENCE_REQUEST =
  'http://localhost:8080/api/absenceRequest';

export const createAbsenceRequest = (requestData) =>
  axios.post(REST_API_BASE_URL_ABSENCE_REQUEST, requestData);
