import React from 'react';

const SiteMap = ({ options }: ComponentsProps.SiteMap) => {
  const total = options.length;

  return (
    <nav id='site-map'>
      <ul>
        {options.map((option: ComponentsProps.SiteMapOption, index) => (
          <li key={option.title + index}>
            {option?.route ? (
              <>
                <a href={option?.route} title={option.description}>
                  {option.title}
                </a>
                {index + 1 < total ? <span>&gt;</span> : null}
              </>
            ) : (
              <span className='pageTitle'>{option.title}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteMap;
