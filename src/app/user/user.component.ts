import { PerformanceActions } from './user-performance-actions';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserActions } from './user-actions';
import { select } from '@angular-redux/store';

@Component({ selector: 'app-user', templateUrl: './user.component.html' })
export class UserComponent implements OnInit {
  u: User[];
  @select('users') users$: Observable<User[]>;
  @select(['performance', 'performancesA'])
  performancesA$: Observable<Performance[]>;
  @select(['performance', 'performancesB'])
  performancesB$: Observable<Performance[]>;

  constructor(
    private userActions: UserActions,
    private performanceAcions: PerformanceActions
  ) {
    userActions.loadUsers();
    performanceAcions.loadPerformances();
  }

  ngOnInit() {
    this.users$.subscribe(users => {
      this.u = [...users];
    });
  }

  onSave = () => {
    this.userActions.saveUsers(this.u);
  }

  onChange(value, type: string, index: number) {
    switch (type) {
      case 'name':
        this.u[index].user.name = value;
        break;

      case 'radio':
      this.u[index].performancesA = [value];
      break;

      case 'checkbox':
        const b = this.u[index].performancesB;
        if (value.checked) {
          if (!b.includes(value.value)) {
            b.push(value.value);
          }
        } else {
          if (b.includes(value.value)) {
            const i = b.indexOf(value.value);
            if (i !== -1) {
              b.splice(i, 1);
            }
          }
        }
        break;
    }
  }
}
