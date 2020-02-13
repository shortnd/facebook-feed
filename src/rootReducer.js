import { combineReducers } from 'redux';

import feeds from './facebook/reducer'

const rootReducer = combineReducers({
  feeds
});

export default rootReducer;
