import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';

import messages from '../intl/messages';

const renderWithContext = (children: React.ReactNode) =>
  render(
    <IntlProvider locale="en" messages={messages.en}>
      {children}
    </IntlProvider>
  );

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
