import React from 'react';
import { useIntl } from 'react-intl';

import SiteMap from '../../../components/SiteMap/';

import { dashboardRoute } from '../../../util/routes';

const QuestionList = () => {
  const intl = useIntl();

  const siteMapOptions = [
    {
      title: intl.formatMessage({ id: 'menuHome' }),
      description: intl.formatMessage({ id: 'menuHome' }),
      route: dashboardRoute,
    },
  ];

  return (
    <div className='app-body-content-no-margin'>
      <SiteMap options={siteMapOptions} />
      <div className='page-header'>
        <h1>{intl.formatMessage({ id: 'questionList' })}</h1>
      </div>
      <div className='app-body-content'>
        <p>Page in construction...</p>
      </div>
    </div>
  );
};

export default QuestionList;
