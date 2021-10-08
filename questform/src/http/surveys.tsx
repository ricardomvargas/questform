import axios from 'axios';
import {
  surveysGet,
  surveysGetById,
  surveysNew,
  surveysUpdate,
  surveysDelete,
} from './enpoints';

// #TODO: review this
export const getAllSurveys = (
  page = '0',
  title = '',
  status = '',
  limit = '',
) =>
  axios.get(
    `${surveysGet}?page=${page}&title=${title}&status=${status}&limit=${limit}`,
  );

export const getLastSurveys = (limit = '5') =>
  axios.get(`${surveysGet}?limit=${limit}&order=desc`);

export const getSurveyById = (idForm: number) =>
  axios.get(`${surveysGetById}?idform=${idForm}`);

export const newSurvey = (data: object) => axios.post(surveysNew, data);

export const updateSurvey = (data: object) => axios.post(surveysUpdate, data);

export const deleteSurvey = (data: object) => axios.post(surveysDelete, data);
