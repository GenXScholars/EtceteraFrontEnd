import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/models/user-models';
import { UserService } from '../../core/api-calls/user.service';
import { ApiHttpService } from '../../core/services/api-http.service.service'
import { UserCardsComponent } from 'src/app/user-dashboard/user-cards/user-cards.component';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  email: FormControl;
  password: FormControl;
  ConfirmPassword: FormControl;
  loginForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private userservice: UserService, private apiServices: ApiHttpService ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);



    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.email]);
    this.ConfirmPassword = new FormControl('', [Validators.required, Validators.email]);
    this.loginForm = new FormGroup({
      email:this.email,
      password:this.password,
      ConfirmPassword:this.ConfirmPassword
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

  onSubmit(){
      console.log(this.user);
      this.toastr.info("Welcome back" + " " + this.user.email);
      this.apiServices.post(this.userservice.loginUser(), this.loginForm.value)
      .pipe(first ()).subscribe(response =>{
        console.log(response);
      })


        // if(!data){
        //   this.router.navigate(['/login']);
        // }


    }
}
