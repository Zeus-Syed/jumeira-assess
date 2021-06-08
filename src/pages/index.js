import React from 'react';
import { Switch, Route,  BrowserRouter} from 'react-router-dom';

// Components
import Sub from './components/sub-item.js';
import Menu from './menu.js';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Sub" component={Sub} />
        <Route component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}
export default AppRoutes;
