import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import DataTable from '../../components/DataTable';
import DashBoardCard from '../../components/DashboardCard';
import IconButton from '../../components/IconButton';

import { getLastSurveys } from '../../http/surveys';
import { getStatus } from '../../util';
import { surveysEditRoute } from '../../util/routes';

import {
  PURPLE,
  GREEN,
  BLUE,
  RED,
  ARROW_LEFT,
  ARROW_RIGHT,
} from '../../util/constants';

const Dashboard = () => {
  const intl = useIntl();
  const [surveys, setSurveys] = useState<{
    list: ComponentsProps.ListItem[];
    totalItens: number;
  }>({ list: [], totalItens: 0 });

  const moreOptions = [
    {
      title: 'View',
      url: surveysEditRoute,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getLastSurveys();
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
  }, []);

  return (
    <div className='app-body-content-no-margin'>
      <div className='page-header'>
        <h1>{intl.formatMessage({ id: 'dashboardTitle' })}</h1>
      </div>
      <div className='app-body-content'>
        <section className='cards-section'>
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
        <section className='last-surveys-section'>
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
