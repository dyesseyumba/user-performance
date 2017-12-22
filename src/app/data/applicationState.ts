import { User, Performance } from './../user';

export interface ApplicationState {
  users: User[];
  performance: Performance;
}
