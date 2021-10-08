import React from 'react';

const DashboardCard = ({
  skin,
  title,
  content,
  url,
}: ComponentsProps.DashboardCard) => {
  const buildLink = (url: string, content: string) => (
    <a href={url} title={content}>
      {content}
    </a>
  );

  return (
    <div className={`${skin}-card roboto-condensed`}>
      <h4 className="roboto-condensed-bold">
        {url ? buildLink(url, title) : title}
      </h4>
      <p>{url ? buildLink(url, content) : content}</p>
    </div>
  );
};

export default DashboardCard;
