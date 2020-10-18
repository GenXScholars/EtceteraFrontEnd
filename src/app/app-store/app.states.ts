import { ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthActionTypes } from './actions/auth.actions';
import * as auth from './reducers/auth.reducers';


export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};



