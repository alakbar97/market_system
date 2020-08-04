import React, { Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import browser_history from './helpers/browser_history';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './PrivateRoute';
//oimport './App.css';

const Login = React.lazy(() => import('./views/containers/Login'));
const Products = React.lazy(() => import('./views/containers/Products'));

function App() {
  return (
    <Suspense fallback={false}>
      <Router history={browser_history}>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute component={Products} path="/products/:category?" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
