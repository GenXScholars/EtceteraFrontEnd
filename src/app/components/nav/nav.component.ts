import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/app-store/actions/auth.actions';
import { AppState, selectAuthState } from 'src/app/app-store/app.states';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  merchant = null;
  admin = null;
  errorMessage = null;
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.merchant = state.merchant;
      this.merchant = state.admin;
      this.errorMessage = state.errorMessage;
    });
  }

   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
    this.router.navigate(['/']);
  }

}
