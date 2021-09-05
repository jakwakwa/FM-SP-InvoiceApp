// import { RootAction, RootState, Services } from './reduxTypes';

import { createStore, combineReducers } from 'redux';
import invoicesReducer from './reducers/Invoices';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
});

const store = createStore(rootReducer);
// const store = createStore(rootReducer);
export default store;
// export type AppDispatch = typeof store.dispatch;
