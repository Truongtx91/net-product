/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from './containers/LoginPage/reducer';
import login from './containers/LoginPage/reducer';
import signup from './containers/SignupPage/reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    signup,
    client,
    login, 
    form
  });

  return rootReducer;
}
