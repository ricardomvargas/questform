import { createContext } from 'react';

const LangContext = createContext<CONTEXTS.LangContext>({ appLang: 'en' });

export default LangContext;
