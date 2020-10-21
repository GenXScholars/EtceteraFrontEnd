import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
// import { Observable } from 'rxjs/Observable';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UserService } from '../../core/api-calls/user.service';
import { Observable } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp } from '../actions/auth.actions';
import { ApiHttpService } from '../../core/services/api-http.service.service'
import { of } from 'rxjs/internal/observable/of';
import { User } from '../../models/user-models'


@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private router: Router,
    private apiServices: ApiHttpService
  ) {}

  // effects go here

  login$ = createEffect(() =>
       this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      exhaustMap( (action: LogIn) =>
        this.apiServices.post(this.userService.loginUser(), action.payload ).pipe(
          map(user => new LogInSuccess({ user })),
          catchError(error => of(new LogInFailure({ error })))
        )
      )
    )
  );


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_SUCCESS),
  tap((user) => {
    localStorage.setItem('token', user.payload.token);
    this.router.navigateByUrl('/user/profile');
  })
);

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  // signup effects

  signUp$ = createEffect(() =>
       this.actions.pipe(
      ofType(AuthActionTypes.SIGNUP),
      exhaustMap( (action: SignUp) =>
        this.apiServices.post(this.userService.signUpUser(), action.payload ).pipe(
          map(user => new LogInSuccess({ user })),
          catchError(error => of(new SignUp({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.SIGNUP_SUCCESS),
  tap((user) => {
    localStorage.setItem('token', user.payload.token);
    this.router.navigateByUrl('/user/profile');
  })
);
@Effect({ dispatch: false })
SignUpFailure: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.SIGNUP_FAILURE)
);
}


