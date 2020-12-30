import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../../static/routes';

const HomePage = lazy(() => import('../HomePage/index'));
const Main = lazy(() => import('../Main/index'));

function App() {
  return (
    <div style={{height: "100%"}}>
      <Router>
        <Switch>
          {/* Va falloir gérer public/private route, à voir avec Nico et Lucas */}
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.main} component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
