import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { TSurvey } from '../../types/Entities/Survey';
import { TServerResponseList } from '../../types/Http';
import { ListItem } from '../../types/components/DataTable';

import DataTable from '../../components/DataTable/DataTable';
import DashBoardCard from '../../components/DashboardCard/DashboardCard';
import IconButton from '../../components/IconButton/IconButton';

import { getLastSurveys } from '../../http/surveys';
import { surveysEditRoute } from '../../util/routes';

import { PURPLE, GREEN, BLUE, RED, ARROW_LEFT, ARROW_RIGHT } from '../../util/constants';
import { BuildDataTableLine } from '../../util/util';

const moreOptions = [
  {
    title: 'View',
    url: surveysEditRoute,
  },
];

const Dashboard = () => {
  const intl = useIntl();
  const [surveys, setSurveys] = useState<{
    list: ListItem[];
    totalItens: number;
  }>({ list: [], totalItens: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const surveyResponse = await getLastSurveys();
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
  }, []);

  return (
    <div className="app-body-content-no-margin">
      <div className="page-header">
        <h1>{intl.formatMessage({ id: 'dashboardTitle' })}</h1>
      </div>
      <div className="app-body-content">
        <section className="cards-section">
          <div>
            <IconButton
              buttonType={ARROW_LEFT}
              title={intl.formatMessage({ id: 'dashboardPreviouslyWeek' })}
              onClickAction={() => console.log('arrow right left')}
            />
            <h2>10/04/2021 to 10/08/2021</h2>
            <IconButton
              buttonType={ARROW_RIGHT}
              title={intl.formatMessage({ id: 'dashboardNextWeek' })}
              onClickAction={() => console.log('arrow right click')}
            />
          </div>
          <hr />
          <div>
            <DashBoardCard skin={PURPLE} title={'loren inpsum'} content={'0'} />
            <DashBoardCard skin={GREEN} title={'loren inpsum'} content={'0'} />
            <DashBoardCard skin={BLUE} title={'loren inpsum'} content={'0'} />
            <DashBoardCard skin={RED} title={'loren inpsum'} content={'0'} />
          </div>
        </section>
        <section className="last-surveys-section">
          <h4>{intl.formatMessage({ id: 'dashboardLastSurveysAnswered' })}</h4>
          <DataTable
            dataList={surveys.list}
            totalItens={surveys.totalItens}
            hideTitle
            moreOptions={moreOptions}
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
