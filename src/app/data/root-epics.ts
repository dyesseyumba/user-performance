import { PerformanceEpic } from './../user/user-performance-epic';
import { UserEpic } from './../user/user-epic';
import { Injectable } from '@angular/core';

@Injectable()
export class RootEpics {
  constructor(
    private userEpics: UserEpic,
    private performanceEpic: PerformanceEpic
  ) {}

/**
 * Get all redux-observable epics
 *
 * @returns arrays of EpicMidleware
 * @memberof RootEpics
 */
public createEpics() {
    return [
      ...this.userEpics.createEpic(),
      ...this.performanceEpic.createEpic()
    ];
  }
}
