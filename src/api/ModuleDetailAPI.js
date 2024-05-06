import axios from 'axios';

const REST_API_BASE_URL_MODULE_DETAILS =
  'http://localhost:8080/api/moduleDetails';

export const listModuleDetails = () =>
  axios.get(REST_API_BASE_URL_MODULE_DETAILS);
