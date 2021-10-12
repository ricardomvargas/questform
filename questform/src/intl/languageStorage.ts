const STORAGE_NAME = 'currentLang';
export const appLangs = { english: 'en', portugueseBR: 'pt' };
const DEFAULT_LANG = appLangs.english;

/**
 * Get the language stored in the local storage or set and return a language
 */
export const getStoredLanguage = (): string => {
  const currentLang = localStorage.getItem(STORAGE_NAME);
  if (!currentLang) {
    if (navigator?.language?.includes(appLangs.english)) {
      storeLanguage(appLangs.english);
      return appLangs.english;
    } else if (navigator?.language?.includes(appLangs.portugueseBR)) {
      storeLanguage(appLangs.portugueseBR);
      return appLangs.portugueseBR;
    }
    storeLanguage(DEFAULT_LANG);
    return DEFAULT_LANG;
  }
  return currentLang;
};

/**
 * Set the language in the browser storage
 * @param newLang
 */
export const storeLanguage = (newLang: string): void => localStorage.setItem(STORAGE_NAME, newLang);
