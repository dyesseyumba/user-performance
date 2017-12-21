import { ApplicationState } from './applicationState';
import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from '../user/user-reducer';
const reducerMap: ReducersMapObject = {
  users: userReducer
};

export const rootReducer = combineReducers<ApplicationState>(reducerMap);
