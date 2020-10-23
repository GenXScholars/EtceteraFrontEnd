import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store/app.states';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  merchant = null;
  admin = null;
  errorMessage = null;

  // form parameters
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phoneNumber: FormControl;
  message: FormControl;
  contactForm : FormGroup;
  constructor(
    private spinner: NgxSpinnerService,
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
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

      this.firstName = new FormControl('', [Validators.required]);
      this.lastName = new FormControl('', [Validators.required]);
      this.email = new FormControl('', [Validators.required, Validators.email]);
      this.phoneNumber = new FormControl('', [Validators.required]);
      this.message = new FormControl('', [Validators.required]);
      this.contactForm = new FormGroup({
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        phoneNumber:this.phoneNumber,
        message:this.message,
      })
    }

    onSubmit(){

    }
}
