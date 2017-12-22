import { UserAction, UserActions } from './user-actions';
import { User } from './../user';
import { Action, Reducer } from 'redux';

/**
 * The redux's user reducer
 *
 * @export
 * @param {User[]} [state=[]]
 * @param {Action} a
 * @returns {User[]} The updated state
 */
export function userReducer(state: User[] = [], a: Action): User[] {

    const action = a as UserAction;

    switch (action.type) {
      case UserActions.LOAD_USERS_SUCCEEDED:
        return [ ...state, ...action.payload ];

      case UserActions.LOAD_USERS_FAILED:
      return state;

      case UserActions.SAVE_USERS_SUCCEEDED:
        return action.payload;
    }

    return state;
  }
