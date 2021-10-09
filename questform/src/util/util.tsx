import { IntlShape } from 'react-intl';
import { TSurvey } from '../types/Entities/Survey';

export const getStatus = (codigo: number) => {
  switch (codigo) {
    case 1:
      return 'offline';
    case 2:
      return 'online';
    case 3:
      return 'publishing';
    case 4:
      return 'finished';
    case 5:
      return 'canceled';
    case 6:
      return 'archived';
  }
};

export const isInt = (n: number) => n % 1 === 0;

export const getIntegerDivision = (value: number, divider: number) => {
  const result = value / divider;
  if (isInt(result)) return result;
  const newResult = parseInt(result.toString());
  return newResult + 1;
};

export const BuildDataTableLine = (survey: TSurvey, intl: IntlShape) => ({
  id: survey.idSurvey,
  mainContent: survey.idSurvey + ' - ' + survey.title,
  subContent: `${intl.formatMessage({
    id: 'surveyTotalQuestions',
  })}: ${survey.totalQuestions}`,
  status: getStatus(survey.idSurveyStatus),
});
