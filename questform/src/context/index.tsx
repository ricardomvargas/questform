import { createContext } from 'react';

import { TLangContext } from '../types/Contexts';

const LangContext = createContext<TLangContext>({ appLang: 'en' });

export default LangContext;
