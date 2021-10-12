import React, { useEffect /*, useState*/ } from 'react';
import { useIntl } from 'react-intl';

import Button from '../../../components/Button/Button';
import IconButton from '../../../components/IconButton/IconButton';
import SurveyStatus from '../../../components/SurveyStatus/SurveyStatus';
import SiteMap from '../../../components/SiteMap/SiteMap';

//import { getSurveyById } from '../../../http/surveys';
import { dashboardRoute, surveysListRoute } from '../../../util/routes';
import { MORE_OPTIONS_HORIZONTAL } from '../../../util/constants';

const Survey = () => {
  const intl = useIntl();
  //const [survey, setSurvey] = useState<Entities.Survey | undefined>(undefined);

  useEffect(() => {
    //if (idSurvey) getSurvey();
  }, []);

  /*const getSurvey = async () => {
    const result = await getSurveyById(idSurvey as number);
    setSurvey(result?.data ? result.data : undefined);
  };*/

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
      title: 'Survey title here',
      description: 'Survey title here',
    },
  ];

  return (
    <div className="app-body-content-no-margin">
      <SiteMap options={siteMapOptions} />
      <div className="page-header">
        <h1>{intl.formatMessage({ id: 'surveyFormNewTitle' })}</h1>
        <div className="page-header-actions">
          <SurveyStatus status={'online'} displayShadow />
          <IconButton
            buttonType={MORE_OPTIONS_HORIZONTAL}
            title={intl.formatMessage({ id: 'dataNew' })}
            url={'#'}
          />
        </div>
      </div>
      <div className="app-body-content">
        <form name="survey-submit" method="POST">
          <fieldset>
            <label>{intl.formatMessage({ id: 'surveyFormTitle' })}</label>
            <input
              name="title"
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              type="text"
              className="input-has-erros"
            />
          </fieldset>
          <fieldset>
            <label>{intl.formatMessage({ id: 'surveyFormDescription' })}</label>
            <textarea
              name="description"
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              rows={8}
              className="input-has-erros"
            ></textarea>
          </fieldset>
          <fieldset>
            <label>{intl.formatMessage({ id: 'surveyFormPublicTitle' })}</label>
            <input
              name="publicTitle"
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              type="text"
            />
          </fieldset>
          <fieldset>
            <label>{intl.formatMessage({ id: 'surveyFormPublicDescription' })}</label>
            <textarea
              name="publicDescription"
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              rows={8}
            ></textarea>
          </fieldset>
          <fieldset>
            <label>{intl.formatMessage({ id: 'surveyFormConclusionMessage' })}</label>
            <textarea
              name="conclusionMessage"
              placeholder={intl.formatMessage({ id: 'formRequiredField' })}
              rows={8}
            ></textarea>
          </fieldset>
          <div className="button-block">
            <Button
              skin="save"
              name="save-survey"
              isSubmit
              text={intl.formatMessage({ id: 'buttonSave' })}
            />
            <span>{intl.formatMessage({ id: 'formRequiredFields' })}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
