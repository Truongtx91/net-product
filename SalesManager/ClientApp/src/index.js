// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import history from './utils/history';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// Import root app
import App from './App';
import Signup from './containers/SignupPage';
import Login from './containers/LoginPage';

const initialState = {};
const store = configureStore(initialState, history);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>      
        </App>
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
