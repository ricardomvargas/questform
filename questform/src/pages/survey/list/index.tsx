import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import DataTable from '../../../components/DataTable';
import SiteMap from '../../../components/SiteMap/';

import { getAllSurveys } from '../../../http/surveys';
import { getStatus } from '../../../util';
import {
  dashboardRoute,
  surveysEditRoute,
  surveysNewRoute,
} from '../../../util/routes';

const SurveyList = () => {
  const intl = useIntl();
  const [surveys, setSurveys] = useState<{
    list: ComponentsProps.ListItem[];
    totalItens: number;
  }>({ list: [], totalItens: 0 });
  const [currentSurveysPage, setCurrentSurveysPage] = useState(1);

  const moreOptions = [
    {
      title: 'Edit',
      url: surveysEditRoute,
    },
    {
      title: 'View',
      url: surveysEditRoute,
    },
    {
      title: 'Custom',
      url: '#',
      onClick: (id: number) => {
        console.log(`custom action clicked ${id}`);
      },
    },
  ];

  const siteMapOptions = [
    {
      title: intl.formatMessage({ id: 'menuHome' }),
      description: intl.formatMessage({ id: 'menuHome' }),
      route: dashboardRoute,
    },
  ];

  const handleSearchAction = (searchText: string) => {
    console.log('search for: ' + searchText);
  };

  const handleFilterAction = () => {
    console.log('Filter clicked');
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllSurveys((currentSurveysPage - 1).toString());
      let surveys: ComponentsProps.ListItem[] = [];
      const { list, total } = (resp?.data as Entities.ServerResponseList) || {};

      list.map((survey: Entities.Survey) => {
        return surveys.push({
          id: survey.idSurvey,
          mainContent: survey.idSurvey + ' - ' + survey.title,
          subContent: `${intl.formatMessage({ id: 'surveyTotalQuestions' })}: ${
            survey.totalQuestions
          }`,
          status: getStatus(survey.idSurveyStatus),
        });
      });

      setSurveys({ list: surveys, totalItens: total });
    };
    fetchData();
    /** #TODO: Entender por que o eslint reclama de não ter a dependecia do intl
     * nesse useEffect. */
    //eslint-disable-next-line
  }, [currentSurveysPage]);

  return (
    <div className='app-body-content-no-margin'>
      <SiteMap options={siteMapOptions} />
      <DataTable
        dataList={surveys.list}
        totalItens={surveys.totalItens}
        listTitle={intl.formatMessage({ id: 'surveysList' })}
        newItemUrl={surveysNewRoute}
        searchAction={handleSearchAction}
        filterAction={handleFilterAction}
        moreOptions={moreOptions}
        currentPage={currentSurveysPage}
        setCurrentPage={setCurrentSurveysPage}
      />
    </div>
  );
};

export default SurveyList;