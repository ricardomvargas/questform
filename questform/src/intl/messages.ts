import appMessagesEN from './app/en';
import appMessagesPT from './app/pt';
import dashboardEN from './pages/dashboard/en';
import dashboardPT from './pages/dashboard/pt';
import questionEN from './pages/question/en';
import questionPT from './pages/question/pt';
import surveyEN from './pages/survey/en';
import surveyPT from './pages/survey/pt';

export default {
  en: {
    ...appMessagesEN,
    ...dashboardEN,
    ...questionEN,
    ...surveyEN,
  },
  pt: {
    ...appMessagesPT,
    ...dashboardPT,
    ...questionPT,
    ...surveyPT,
  },
};
