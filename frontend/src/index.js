import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import {Route, Switch} from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import './index.css';

import App from './App';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import configureStore from './store'

const history = createHistory()
const store = configureStore(history)
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/login/" component={Login} />
            <PrivateRoute path="/" component={App}/>
        </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

