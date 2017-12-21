import { User } from './../user';
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = User[];
export type UserAction = FluxStandardAction<Payload, {}>;

@Injectable()
export class UserActions {
  static readonly LOAD_USERS = 'LOAD_USERS';
  static readonly LOAD_USERS_STARTED = 'LOAD_USERS_STARTED';
  static readonly LOAD_USERS_SUCCEEDED = 'LOAD_USERS_SUCCEEDED';
  static readonly LOAD_USERS_FAILED = 'LOAD_USERS_FAILED';

  @dispatch()
  loadUsers = (): UserAction => ({
    type: UserActions.LOAD_USERS,
    meta: {},
    payload: null,
  })

  loadStarted = (): UserAction => ({
    type: UserActions.LOAD_USERS_STARTED,
    meta: { },
    payload: null,
  })

  loadSucceeded = (payload): UserAction => ({
    type: UserActions.LOAD_USERS_SUCCEEDED,
    meta: {},
    payload,
  })

  loadFailed = (error): UserAction => ({
    type: UserActions.LOAD_USERS_FAILED,
    meta: { },
    payload: null,
    error,
  })
}
