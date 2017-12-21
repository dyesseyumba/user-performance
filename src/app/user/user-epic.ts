import { UserService } from './../user.service';
import { ApplicationState } from './../data/applicationState';
import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { UserActions, UserAction } from './user-actions';


@Injectable()
export class UserEpic {
  constructor(
    private service: UserService,
    private actions: UserActions,
  ) {}

  public createEpic() {
    return createEpicMiddleware(this.createLoadAnimalEpic());
  }



  private createLoadAnimalEpic() {
    return (action$) => action$
      .filter(action => action.type === UserActions.LOAD_USERS)
      .switchMap(
        () => this.service.gethUsers()
        .map(data => this.actions.loadSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.loadStarted());

  }
}
