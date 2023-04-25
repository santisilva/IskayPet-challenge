import axios from 'axios';



//export const baseURL =  'https://ikp-mobile-challenge-backend.up.railway.app/'
export const baseURL =  'https://run.mocky.io/v3/'
export const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 15000,
});