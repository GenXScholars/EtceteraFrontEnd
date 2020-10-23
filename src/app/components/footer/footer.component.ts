import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from 'src/app/app-store/app.states';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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

}
