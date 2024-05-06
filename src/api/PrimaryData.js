import axios from 'axios';

const REST_API_BASE_URL_PRIMARY_DATA =
  'http://localhost:8080/api/userPrimaryData/';

export const getPimaryData = (id) =>
  axios.get(REST_API_BASE_URL_PRIMARY_DATA + id);
