import { createStore, combineReducers } from "redux";

// import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
// import {createWrapper} from 'next-redux-wrapper';
// import thunkMiddleware from "redux-thunk";
import invoicesReducer from "../store/reducers/Invoices";
// import jobReducer from "./src/store/reducers/jobs";
// import companyReducer from "./src/store/reducers/companies";
// import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
});

// const counterReducer = (state = { counter: 5 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };
// const store = createStore(counterReducer);

// export default store;

const store = createStore(rootReducer);

export default store;
