import { UserActions } from './user/user-actions';
import { UserEpic } from './user/user-epic';
import { StoreModule } from './data/store.module';
import { ApplicationState } from './data/applicationState';
import {NgReduxModule } from '@angular-redux/store';
import { UserService } from './user.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent
  ],
  imports: [BrowserModule, HttpClientModule, NgReduxModule, StoreModule],
  providers: [UserService, UserEpic, UserActions],
  bootstrap: [AppComponent]
})
export class AppModule {
}
