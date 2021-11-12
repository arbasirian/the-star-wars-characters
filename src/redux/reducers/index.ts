import mainReducer from './main.reducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
  main: mainReducer,
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === 'DESTROY_SESSION') state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
