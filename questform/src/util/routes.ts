const SURVEYS = '/surveys';
const QUESTIONS = '/questions';

export const dashboardRoute = '/';

export const surveysListRoute = SURVEYS;
export const surveysNewRoute = `${SURVEYS}/new`;
export const surveysEditRoute = `${SURVEYS}/:id`;

export const questionsListRoute = QUESTIONS;
export const questionsListBySurveysRoute = `${QUESTIONS}/:idSurvey`;
export const questionsNewRoute = `${QUESTIONS}/new`;
export const questionsEditRoute = `${QUESTIONS}/:idSurvey/:idQuestion`;
