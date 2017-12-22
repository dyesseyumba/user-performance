import { RootEpics } from './root-epics';
import {rootReducer} from './root-reducer';
import {ApplicationState} from './applicationState';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';

// Redux ecosystem stuff.
import {createLogger} from 'redux-logger';

@NgModule({imports: [NgReduxModule],
  providers: [RootEpics]})


export class StoreModule {
  constructor(public store: NgRedux < ApplicationState >, devTools: DevToolsExtension,
    rootEpics: RootEpics) {

    const middlewares = [...rootEpics.createEpics(), createLogger()];

    store.configureStore(rootReducer,
      {} as ApplicationState, middlewares, devTools.isEnabled()
      ? [devTools.enhancer()]
      : []);
    }

}
