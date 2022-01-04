import React from 'react';
import { useIntl } from 'react-intl';

import { TMenu } from '../../types/components/Menu';

import { arrowRight } from '../../util/imagesPath';

const Menu = ({ menuIcon, menuVisible, onMenuClick, appLinks }: TMenu) => {
  const intl = useIntl();

  const handleMouseOver = (id: string) => {
    let el = document.getElementById(id);
    el && (el.style.display = 'inline-block');
  };

  const handleMouseOut = (id: string) => {
    let el = document.getElementById(id);
    el && (el.style.display = 'none');
  };

  return (
    <nav className="menu" style={{ width: menuVisible ? '170px' : '0' }}>
      <section className="menu-top">
        <div>
          {/* <IconButton buttonType="menu" onClickAction={onMenuClick} /> */}
          <img
            src={menuIcon}
            className="img-menu"
            alt={intl.formatMessage({ id: 'menu' })}
            title={intl.formatMessage({ id: 'menu' })}
            onClick={() => onMenuClick()}
          />
        </div>
      </section>
      <section>
        <ul className="menu-links">
          {menuVisible &&
            /** #TODO: Add key in the <li> */
            appLinks.map((appLink, index: number) => (
              <li
                onMouseOver={() => handleMouseOver(`img${index}`)}
                onMouseOut={() => handleMouseOut(`img${index}`)}
              >
                <a href={appLink.url} onClick={() => onMenuClick()}>
                  {appLink.title}
                  <img id={`img${index}`} src={arrowRight} alt="go" />
                </a>
              </li>
            ))}
        </ul>
      </section>
    </nav>
  );
};

export default Menu;
