import * as React from 'react';

const SurveyStatus = ({
  status,
  displayShadow,
}: ComponentsProps.SurveyStatus) => {
  const buildClassName = () => {
    const className = status ?? 'offline';
    if (displayShadow) return className + ' shadow';
    return className;
  };

  return <span className={buildClassName()}></span>;
};

export default SurveyStatus;
