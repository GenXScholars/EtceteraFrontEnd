import { createAction, props } from '@ngrx/store';

export const checkAuth = createAction('[Auth] checkAuth');
export const checkAuthComplete = createAction(
  '[Auth] checkAuthComplete',
  props<{ isLoggedIn: boolean }>()
);
export const login = createAction('[Auth] login');
export const LoginSuccess = createAction(
  '[Auth] loginSuccess',
  props<{ profile: any; isLoggedIn: boolean }>()
);
export const loginFailure = createAction(
  '[Auth] loginFailure',
  props<{ profile: null; errorMessage: string }>()
);

export const SignUp = createAction('[Auth] SignUp');
export const SignUpSuccess = createAction(
  '[Auth] SignUpSuccess',
  props<{ profile: any; isLoggedIn: boolean }>()
);
export const SignUpFailure = createAction(
  '[Auth] SignUpFailure',
  props<{ profile: null; isLoggedIn:boolean; errorMessage: string }>()
);
export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction(
  '[Auth] logoutComplete',
  props<{ profile: null; isLoggedIn:boolean; errorMessage: string }>()
  );
