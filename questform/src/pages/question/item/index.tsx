import React /*, { useState }*/ from 'react';
import { useIntl } from 'react-intl';

import SiteMap from '../../../components/SiteMap/';
import { dashboardRoute, surveysListRoute } from '../../../util/routes';

const Question = () => {
  const intl = useIntl();
  // const [question, setQuestion] = useState<Entities.Question | undefined>(
  //   undefined,
  // );

  const siteMapOptions = [
    {
      title: intl.formatMessage({ id: 'menuHome' }),
      description: intl.formatMessage({ id: 'menuHome' }),
      route: dashboardRoute,
    },
    {
      title: intl.formatMessage({ id: 'surveysList' }),
      description: intl.formatMessage({ id: 'surveysList' }),
      route: surveysListRoute,
    },
    {
      title: intl.formatMessage({ id: 'questionFormNewTitle' }),
      description: intl.formatMessage({ id: 'questionFormNewTitle' }),
    },
  ];

  return (
    <div className='app-body-content-no-margin'>
      <SiteMap options={siteMapOptions} />
      <div className='page-header'>
        <h1>{intl.formatMessage({ id: 'questionFormNewTitle' })}</h1>
      </div>
      <div className='app-body-content'>
        <form name='survey-submit' method='POST'>
          <fieldset>
            <label>
              {intl.formatMessage({ id: 'questionFormDescription' })}
            </label>
            <input
              name='title'
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              type='text'
              className='input-has-erros'
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Question;
