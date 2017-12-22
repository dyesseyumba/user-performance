import {Observable} from 'rxjs/Observable';
import {UserService} from './../user.service';
import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserActions} from './user-actions';
import {select} from '@angular-redux/store';

@Component({selector: 'app-user', templateUrl: './user.component.html', styleUrls: ['./user.component.css']})
export class UserComponent implements OnInit {

  u: User[];
  @select('users')
  users$: Observable < User[] >;
  constructor(private actions: UserActions) {
    actions.loadUsers();
  }

  ngOnInit() {
    this
      .users$
      .subscribe(users => {
        this.u = [...users];
      });
  }

  onSave = () => {
    this
      .actions
      .saveUsers([]);
  }

  onChange(value, type: string, index: number, index2: number) {
    switch (type) {
      case 'name':
      this.u[index].user.name = value;
      break;

      case 'radio':
      this.handleRadion(value, index);
      break;

      case 'checkbox':
      this.u[index].perdormanceB[index2].name = value ? '1' : '0';
      break;
    }
  }

  private handleRadion (value: string, index: number) {
    switch (value) {
      case 'x': {
        this.u[index].perdormanceA[0].name = '1';
        this.u[index].perdormanceA[1].name = '0';
        this.u[index].perdormanceA[2].name = '0';
        break;
      }
      case 'y': {
        this.u[index].perdormanceA[0].name = '0';
        this.u[index].perdormanceA[1].name = '1';
        this.u[index].perdormanceA[2].name = '0';
        break;
      }
      case 'z': {
        this.u[index].perdormanceA[0].name = '';
        this.u[index].perdormanceA[1].name = '0';
        this.u[index].perdormanceA[2].name = '1';
        break;
      }
    }
  }
}
