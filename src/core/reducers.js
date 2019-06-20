import { combineReducers } from 'redux';

import LandingPage from '../containers/LandingPage/reducer';

const reducers = combineReducers({
  LandingPage: LandingPage
});

export default (state, action) => {
  return reducers(state, action);
};
