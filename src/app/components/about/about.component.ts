import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app.states';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'VineBill-About';
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  merchant = null;
  admin = null;
  errorMessage = null;
  constructor(
    private spinner: NgxSpinnerService,
    private store: Store<AppState>,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.merchant = state.merchant;
      this.merchant = state.admin;
      this.errorMessage = state.errorMessage;
    });
  }

}
