import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { LogIn } from 'src/app/app-store/actions/auth.actions';
import { AppState } from 'src/app/app-store/app.states';
import { ApiHttpService } from 'src/app/core/services/api-http.service.service';
import { User } from 'src/app/models/user-models';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.scss']
})
export class MerchantLoginComponent implements OnInit {
  getState: Observable<any>;
  errorMessage: string | null;
  user: User = new User();
  email: FormControl;
  password: FormControl;
  loginForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private apiServices: ApiHttpService, private store: Store<AppState> ) { }

  ngOnInit(): void {
        // display error mesagges
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);



    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.email]);
    this.loginForm = new FormGroup({
      email:this.email,
      password:this.password
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      walletBalance: this.user.walletBalance,
      token: this.user.token,
    };
    this.store.dispatch(new LogIn(payload));
  }
  // onSubmit(){
  //     console.log(this.user);
  //     this.toastr.info("Welcome back" + " " + this.user.email);
  //     this.apiServices.post(this.userservice.loginUser(), this.loginForm.value)
  //     .pipe(first ()).subscribe(response =>{
  //       console.log(response);
  //     })
  //       // if(!data){
  //       //   this.router.navigate(['/login']);
  //       // }
  //   }

}
