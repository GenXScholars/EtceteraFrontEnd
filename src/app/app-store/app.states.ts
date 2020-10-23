import { ofType } from '@ngrx/effects';
import { createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthActionTypes } from './actions/auth.actions';
import * as auth from './reducers/user.reducers';



export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.UserReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');



