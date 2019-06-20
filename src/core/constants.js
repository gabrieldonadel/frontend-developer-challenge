import axios from 'axios';
export const request = axios.create({
  validateStatus: (status) => status >= 200 && status < 300,
  baseURL: "https://",
});
 
