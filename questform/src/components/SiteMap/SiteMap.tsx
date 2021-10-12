import React from 'react';

import { TSiteMap, SiteMapOption } from '../../types/components/SiteMap';

const SiteMap = ({ options }: TSiteMap) => {
  const total = options.length;

  return (
    <nav id="site-map">
      <ul>
        {/** #TODO: Add key in the <li> without the index */}
        {options.map((option: SiteMapOption, index) => (
          <li key={option.title + index}>
            {option?.route ? (
              <>
                <a href={option?.route} title={option.description}>
                  {option.title}
                </a>
                {index + 1 < total ? <span>&gt;</span> : null}
              </>
            ) : (
              <span className="pageTitle">{option.title}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteMap;
