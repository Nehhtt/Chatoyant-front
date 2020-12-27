import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import customTheme from './theme';
import { Loader } from './components/atoms';

import globalContext from './components/globalContext';

const App = lazy(() => import('./containers/App'));


ReactDOM.render(
  <Grommet theme={customTheme}>
    <Suspense fallback={<Loader />}>
      <globalContext.Provider value="lala">
        <App />
      </globalContext.Provider>
    </Suspense>
  </Grommet>,
  document.getElementById('root'),
);
