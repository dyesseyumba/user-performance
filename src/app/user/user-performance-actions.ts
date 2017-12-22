import { Performance } from './../user';
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = Performance;
export type PerformanceAction = FluxStandardAction<Payload, {}>;

@Injectable()
export class PerformanceActions {

  static readonly LOAD_PERFORMANCES = 'LOAD_PERFORMANCES';
  static readonly LOAD_PERFORMANCES_STARTED = 'LOAD_PERFORMANCES_STARTED';
  static readonly LOAD_PERFORMANCES_SUCCEEDED = 'LOAD_PERFORMANCES_SUCCEEDED';
  static readonly LOAD_PERFORMANCES_FAILED = 'LOAD_PERFORMANCES_FAILED';

  @dispatch()
  loadPerformances = (): PerformanceAction => ({
    type: PerformanceActions.LOAD_PERFORMANCES,
    meta: {},
    payload: null,
  })

  loadStarted = (): PerformanceAction => ({
    type: PerformanceActions.LOAD_PERFORMANCES_STARTED,
    meta: { },
    payload: null,
  })

  loadSucceeded = (payload): PerformanceAction => ({
    type: PerformanceActions.LOAD_PERFORMANCES_SUCCEEDED,
    meta: {},
    payload,
  })

  loadFailed = (error): PerformanceAction => ({
    type: PerformanceActions.LOAD_PERFORMANCES_FAILED,
    meta: { },
    payload: null,
    error,
  })
}
