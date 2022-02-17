import axios from 'axios';

import { surveysGet, surveysGetById } from './enpoints';

// #TODO: Add error handler
export const getAllSurveys = (page = '0', title = '', status = '', limit = '') =>
  axios.get(`${surveysGet}?page=${page}&title=${title}&status=${status}&limit=${limit}`);

export const getLastSurveys = (limit = '5') => axios.get(`${surveysGet}?limit=${limit}&order=desc`);

export const getSurveyById = (idForm: number) => axios.get(`${surveysGetById}?idform=${idForm}`);
