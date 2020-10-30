import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/app-store/actions/auth.actions';
import { AppState, selectAuthState } from 'src/app/app-store/app.states';
import { User } from 'src/app/models/user-models';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  user = null ;
  errorMessage = null;
  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
    console.log(this.isAuthenticated)

  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
