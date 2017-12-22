import { PerformanceActions, PerformanceAction } from './user-performance-actions';
import { UserService } from './../user.service';
import { map } from 'rxjs/operators';
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
import { Performance } from '../user';

/**
 * The Performance rx-observable's epic
 *
 * @export
 * @class PerformanceEpic
 */
@Injectable()
export class PerformanceEpic {
  constructor(private service: UserService, private actions: PerformanceActions) {}

  public createEpic() {
    return [
      createEpicMiddleware(this.createLoadPerformanceEpic())
    ];
  }

  private createLoadPerformanceEpic(): Epic<PerformanceAction, ApplicationState> {
    return action$ =>
      action$
        .filter(action => action.type === PerformanceActions.LOAD_PERFORMANCES)
        .switchMap(() =>
          this.service
            .getPerformances()
            .map(data => this.actions.loadSucceeded(data))
            .catch(response =>
              of(
                this.actions.loadFailed({
                  status: '' + response.status
                })
              )
            )
            .startWith(this.actions.loadStarted())
        );
  }
}
