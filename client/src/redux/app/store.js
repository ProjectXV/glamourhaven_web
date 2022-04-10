import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const reducer = combineReducers({
  // here we will be adding reducers
});

const store = configureStore({
  reducer,
  preloadedState: {
    user: {
      userInfo: userInfoFromStorage,
    },
  },
});

export default store;
