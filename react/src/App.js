import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "mobx-react";
import sessionStore from "./stores/SessionStore";
import PrivateRoute from "./PrivateRoute";
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));


const stores = {
  sessionStore
};

class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
              <PrivateRoute path="/" name="Home" component={DefaultLayout}/>
            </Switch>
          </React.Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
