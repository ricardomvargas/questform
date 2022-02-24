import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import { TSurvey } from '../../../http/types/Survey';
import { TServerResponseList } from '../../../http/Thttp';
import { ListItem } from '../../../components/DataTable/TDataTable';

import DataTable from '../../../components/DataTable/DataTable';
import SiteMap from '../../../components/SiteMap/SiteMap';

import { getAllSurveys } from '../../../http/surveys';

import { dashboardRoute, surveysEditRoute, surveysNewRoute } from '../../../util/routes';
import { BuildDataTableLine } from '../../../util/util';

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

const SurveyList = () => {
  const intl = useIntl();
  const [surveys, setSurveys] = useState<{
    list: ListItem[];
    totalItens: number;
  }>({ list: [], totalItens: 0 });
  const [currentSurveysPage, setCurrentSurveysPage] = useState(1);

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
      const surveyResponse = await getAllSurveys((currentSurveysPage - 1).toString());
      const { data } = surveyResponse;
      const { list, total } = (data as TServerResponseList) || {};
      const surveys: ListItem[] =
        total > 0 ? list.map((survey: TSurvey) => BuildDataTableLine(survey, intl)) : [];

      setSurveys({ list: surveys, totalItens: total });
    };
    fetchData();
    /** #TODO: Entender por que o eslint reclama de não ter a dependecia do intl
     * nesse useEffect. */
    //eslint-disable-next-line
  }, [currentSurveysPage]);

  return (
    <div className="app-body-content-no-margin">
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
