import React, { useState, useContext } from 'react';
import { useIntl } from 'react-intl';

import LangContext from '../../context';

import brFlagRounded from '../../assets/images/br-flag-rounded.png';
import ukFlagRounded from '../../assets/images/uk-flag-rounded.png';
import arrowDownImg from '../../assets/images/arrow-down.png';
import closeImg from '../../assets/images/close.png';

import { storeLanguage, appLangs } from '../../intl/languageStorage';

const LanguagePicker = () => {
  const intl = useIntl();
  const { updateAppLang, appLang } = useContext(LangContext);
  const [langOptionsVisible, setLangOptionsVisible] = useState(false);
  const [langOptionsLeftPosition, setlangOptionsLeftPosition] = useState<number>();

  const getButtonFlagPosition = (el: HTMLImageElement) => {
    let x: number = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      el = el.offsetParent as HTMLImageElement;
    }
    return x - 36;
  };

  const updateMenuLangVisibility = (): void => {
    setlangOptionsLeftPosition(
      getButtonFlagPosition(document.getElementById('btn-show-menu-item') as HTMLImageElement)
    );
    setLangOptionsVisible(!langOptionsVisible);
  };

  const handleLanguageChange = (newLang: string): void => {
    storeLanguage(newLang);
    if (updateAppLang) updateAppLang(newLang);
    updateMenuLangVisibility();
  };

  const closeMenuItemOptions = (): void => setLangOptionsVisible(false);
  // #TODO: Analisar se não é melhor usar um useEffect para registrar esse evento
  window.addEventListener('resize', closeMenuItemOptions);

  return (
    <section className="lang-menu">
      <div className="lang-menu-item">
        <img
          src={appLang === appLangs.english ? ukFlagRounded : brFlagRounded}
          className="img-flag"
          alt={appLang}
          title={appLang}
          onClick={updateMenuLangVisibility}
        />
        <img
          id="btn-show-menu-item"
          className="img-options"
          src={langOptionsVisible ? closeImg : arrowDownImg}
          alt={
            langOptionsVisible
              ? intl.formatMessage({ id: 'buttonClose' })
              : intl.formatMessage({ id: 'buttonOpen' })
          }
          title={
            langOptionsVisible
              ? intl.formatMessage({ id: 'buttonClose' })
              : intl.formatMessage({ id: 'buttonOpen' })
          }
          onClick={updateMenuLangVisibility}
        />
      </div>
      <div
        style={{ left: langOptionsLeftPosition }}
        className={langOptionsVisible ? 'lang-menu-options' : 'lang-menu-options-hide'}
      >
        <img
          src={ukFlagRounded}
          className="img-flag"
          alt={intl.formatMessage({ id: 'changeToEnglish' })}
          title={intl.formatMessage({ id: 'changeToEnglish' })}
          onClick={() => handleLanguageChange(appLangs.english)}
        />
        <img
          src={brFlagRounded}
          className="img-flag"
          alt={intl.formatMessage({ id: 'changeToPortuguese' })}
          title={intl.formatMessage({ id: 'changeToPortuguese' })}
          onClick={() => handleLanguageChange(appLangs.portugueseBR)}
        />
      </div>
    </section>
  );
};

export default LanguagePicker;
