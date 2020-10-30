import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../app-store/app.states';
import { User } from 'src/app/models/user-models';
import { UserService } from '../../core/api-calls/user.service';
import { ApiHttpService } from '../../core/services/api-http.service.service'
import { UserCardsComponent } from 'src/app/user-dashboard/user-cards/user-cards.component';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs/operators';
import { LogIn } from 'src/app/app-store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getState: Observable<any>;
  errorMessage: string | null;
  user: User = new User();
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  userName: FormControl;
  password: FormControl;
  ConfirmPassword: FormControl;
  Agree: FormControl;
  RememberPassword: FormControl;
  loginForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private userservice: UserService, private apiServices: ApiHttpService, private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email:this.email,
      password:this.password,

    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage(){
    if(this.ConfirmPassword.hasError('required')) {
      return 'you must confirm your password';
    }

    return 'passwords do not match';
  }


  onSubmit(): void {
    console.log(this.getState)
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

  // onSubmit(){
  //     console.log(this.user);
  //     this.toastr.info("Welcome" + " " + this.user.email);
  //     this.apiServices.post(this.userservice.signUpUser(), this.registrationForm.value)
  //     .pipe(first ()).subscribe(response =>{
  //       console.log(response);
  //     })
  //   }

}

