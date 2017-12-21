import { UserEpic } from './../user/user-epic';
import { Injectable } from '@angular/core';

@Injectable()
export class RootEpics {
  constructor(private userEpics: UserEpic) {}

  public createEpics() {
    return [
      this.userEpics.createEpic(),
    ];
  }
}
