import * as React from 'react';

import { TSurveyStatus } from './TSurveyStatus';

const SurveyStatus = ({ status, displayShadow }: TSurveyStatus) => {
  const buildClassName = () => {
    const className = status ?? 'offline';
    if (displayShadow) return className + ' shadow';
    return className;
  };

  return <span className={buildClassName()}></span>;
};

export default SurveyStatus;
