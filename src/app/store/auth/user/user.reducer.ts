import { RouterLink } from '@angular/router';
import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './user.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  profile: any;
  isLoggedIn: boolean;
  errorMessage: string;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  profile: null,
  errorMessage:null,
};

const authReducerInternal = createReducer(
  initialAuthState,

  on(authActions.LoginSuccess, (state, { profile, isLoggedIn }) => {
    return {
      ...state,
      profile,
      isLoggedIn,
      errorMessage:null
    };
  }),
  on(authActions.loginFailure, (state, {}) => {
    return {
      ...state,
      profile: null,
      isLoggedIn: false,
      errorMessage: 'Incorrect email or password, please try again'
    };
  }),
  on(authActions.SignUpSuccess, (state, {profile, isLoggedIn }) => {
    return {
      ...state,
      profile,
      isLoggedIn,
      errorMessage:null,
    };
  }),
  on(authActions.SignUpFailure, (state, {profile}) => {
    return {
      ...state,
      profile,
      isLoggedIn: false,
      errorMessage:`User already exists... please login to user account`,
    };
  }),
  on(authActions.logoutComplete, (state, { }) => {
    return {
      ...state,
      profile:null,
      isLoggedIn:false
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
