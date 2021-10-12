import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LanguagePicker from './components/LanguagePicker/LanguagePicker';

import DashBoard from './pages/dashboard/Dashboard';
import SurveyList from './pages/survey/list/SurveyList';
import Survey from './pages/survey/item/SurveyItem';
import QuestionList from './pages/question/list/QuestionList';
import Question from './pages/question/item/QustionItem';

import LangContext from './context';

import profileImg from './assets/images/me.jpg';
import messages from './intl/messages';
import { getStoredLanguage } from './intl/languageStorage';

import './styles/App.scss';

import {
  dashboardRoute,
  surveysListRoute,
  surveysNewRoute,
  surveysEditRoute,
  questionsListRoute,
  questionsListBySurveysRoute,
  questionsNewRoute,
  questionsEditRoute,
} from './util/routes';

function App() {
  const [appLang, setAppLang] = useState(getStoredLanguage());

  const updateAppLang = (newLang: string) => setAppLang(newLang);

  return (
    <IntlProvider locale={appLang} messages={appLang === 'en' ? messages.en : messages.pt}>
      <div className="app">
        <Header
          profilePicture={profileImg}
          profileName={'Ricardo Vargas'}
          languagePicker={
            <LangContext.Provider value={{ updateAppLang, appLang }}>
              <LanguagePicker />
            </LangContext.Provider>
          }
        />
        <div className="app-body">
          <Router>
            <Switch>
              <Route component={DashBoard} exact path={dashboardRoute} />
              <Route component={SurveyList} exact path={surveysListRoute} />
              <Route component={Survey} path={surveysNewRoute} />
              <Route component={Survey} path={surveysEditRoute} />
              <Route component={QuestionList} exact path={questionsListRoute} />
              <Route component={QuestionList} exact path={questionsListBySurveysRoute} />
              <Route component={Question} path={questionsNewRoute} />
              <Route component={Question} path={questionsEditRoute} />
            </Switch>
          </Router>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
