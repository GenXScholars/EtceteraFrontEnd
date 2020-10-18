import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';
import { MerchantService } from 'src/app/core/api-calls/merchant.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service.service';
import { User } from 'src/app/models/user-models';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-mregister',
  templateUrl: './mregister.component.html',
  styleUrls: ['./mregister.component.scss']
})
export class MregisterComponent implements OnInit {

  user: User = new User();
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  userName: FormControl;
  password: FormControl;
  ConfirmPassword: FormControl;
  Agree: FormControl;
  RememberPassword: FormControl;
  registrationForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private merchantservice: MerchantService, private apiServices: ApiHttpService ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);



    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.userName = new FormControl('', [Validators.required]);
    this.Agree = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.ConfirmPassword = new FormControl('', [Validators.required]);
    this.RememberPassword = new FormControl('', [Validators.required]);
    this.registrationForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      userName:this.userName,
      Agree:this.Agree,
      password:this.password,
      ConfirmPassword:this.ConfirmPassword,
      RememberPassword:this.RememberPassword
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
      this.toastr.info("Welcome" + " " + this.user.email);
      this.apiServices.post(this.merchantservice.signUpMerchant(), this.registrationForm.value)
      .pipe(first ()).subscribe(response =>{
        console.log(response);
      })
    }

}
