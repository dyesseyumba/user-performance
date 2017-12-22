import { ApplicationState } from './applicationState';
import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from '../user/user-reducer';
import { performanceReducer } from '../user/user-performance-reducer';

const reducerMap: ReducersMapObject = {
  users: userReducer,
  performance: performanceReducer
};

export const rootReducer = combineReducers<ApplicationState>(reducerMap);
