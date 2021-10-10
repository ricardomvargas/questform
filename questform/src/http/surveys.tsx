import { surveysGet, surveysGetById } from './enpoints';

// #TODO: Add error handler
export const getAllSurveys = (
  page = '0',
  title = '',
  status = '',
  limit = ''
) =>
  fetch(
    `${surveysGet}?page=${page}&title=${title}&status=${status}&limit=${limit}`
  );

export const getLastSurveys = (limit = '5') =>
  fetch(`${surveysGet}?limit=${limit}&order=desc`);

export const getSurveyById = (idForm: number) =>
  fetch(`${surveysGetById}?idform=${idForm}`);
