import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../../static/routes';

import GlobalProvider from '../../components/globalContext/globalProvider';

const HomePage = lazy(() => import('../HomePage/index'));

function Test() {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        {/* Va falloir gérer public/private route, à voir avec Nico et Lucas */}
        <Route exact path={routes.home} component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
