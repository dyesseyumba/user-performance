import { Observable } from 'rxjs/Observable';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserActions } from './user-actions';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // public users$: Observable<User[]>;


  // Get lion-related data out of the Redux store as observables.
  @select() users$;
  // readonly users$: Observable<User[]>;
  constructor(actions: UserActions) {
    actions.loadUsers();
  }

  ngOnInit() {
    // this.users$ = this.userService.gethUsers();
  }

}
