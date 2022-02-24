import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { THeader } from './THeader';
import { AppLink } from '../Menu/TMenu';

import Menu from '../Menu/Menu';
import { menuIcon } from '../../util/imagesPath';

import { dashboardRoute, surveysListRoute, questionsListRoute } from '../../util/routes';

const Header = ({ profilePicture, profileName, languagePicker }: THeader) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const intl = useIntl();

  const appLinks: AppLink[] = [
    {
      title: intl.formatMessage({ id: 'menuHome' }),
      imgId: 'imgGo',
      url: dashboardRoute,
    },
    {
      title: intl.formatMessage({ id: 'menuSurveys' }),
      imgId: 'imgGo',
      url: surveysListRoute,
    },
    {
      title: intl.formatMessage({ id: 'menuQuestions' }),
      imgId: 'imgGo',
      url: questionsListRoute,
    },
  ];

  const handleMenuClick = (): void => setMenuVisible(!menuVisible);

  return (
    <header>
      <section className="app-header">
        <div className="app-header-content">
          <div>
            <img
              src={menuIcon}
              style={{ display: menuVisible ? 'none' : 'inline-block' }}
              className="img-menu"
              alt={intl.formatMessage({ id: 'menu' })}
              title={intl.formatMessage({ id: 'menu' })}
              onClick={handleMenuClick}
            />
          </div>
          <div className="app-header-user-profile">
            <span className="divisor"></span>
            {languagePicker}
            <img
              src={profilePicture}
              className="img-profile"
              alt={intl.formatMessage({ id: 'profile' })}
              title={profileName}
            />
          </div>
        </div>
      </section>
      <Menu
        menuIcon={menuIcon}
        menuVisible={menuVisible}
        onMenuClick={handleMenuClick}
        appLinks={appLinks}
      />
    </header>
  );
};

export default Header;
