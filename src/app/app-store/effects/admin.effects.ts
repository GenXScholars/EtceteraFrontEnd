import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
// import { Observable } from 'rxjs/Observable';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AdminService } from '../../core/api-calls/admin.service';
import { Observable } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';
import { ApiHttpService } from '../../core/services/api-http.service.service'
import { of } from 'rxjs/internal/observable/of';
import { Admin } from '../../models/admin-models'


@Injectable({
  providedIn: 'root'
})
export class AdminEffects {
  constructor(
    private actions: Actions,
    private adminService: AdminService,
    private router: Router,
    private apiServices: ApiHttpService
  ) {}

  // effects go here
  login$ = createEffect(() =>
       this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      exhaustMap( (action: LogIn) =>
        this.apiServices.post(this.adminService.loginAdmin(), action.payload ).pipe(
          map(admin => new LogInSuccess({ admin })),
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
      this.router.navigateByUrl('/');
    })
  );
}
