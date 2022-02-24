import { createContext } from 'react';

import { TLangContext } from './Tcontexts';

const LangContext = createContext<TLangContext>({ appLang: 'en' });

export default LangContext;
