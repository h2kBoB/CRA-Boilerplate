import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './redux/exampleSlice';
import authReducer from './redux/authSlice';

const rootReducer = combineReducers({
  example: exampleReducer, // example
  auth: authReducer,
  // add reducer
});

export default rootReducer;
