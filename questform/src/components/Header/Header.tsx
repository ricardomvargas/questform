import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { THeader } from '../../types/components/Header';
import { AppLink } from '../../types/components/Menu';

import Menu from '../Menu/Menu';
import menuIcon from '../../assets/images/menu-icon.png';

import {
  dashboardRoute,
  surveysListRoute,
  questionsListRoute,
} from '../../util/routes';

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
      <section className='app-header'>
        <div className='app-header-content'>
          <div>
            <img
              src={menuIcon}
              style={{ display: menuVisible ? 'none' : 'inline-block' }}
              className='img-menu'
              alt={intl.formatMessage({ id: 'Menu' })}
              title={intl.formatMessage({ id: 'Menu' })}
              onClick={handleMenuClick}
            />
          </div>
          <div className='app-header-user-profile'>
            <span className='divisor'></span>
            {languagePicker}
            <img
              src={profilePicture}
              className='img-profile'
              alt={intl.formatMessage({ id: 'Profile' })}
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
