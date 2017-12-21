import { Observable } from 'rxjs/Observable';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users$: Observable<User[]>;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.gethUsers();
  }

}
