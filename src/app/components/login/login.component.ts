import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Store } from '@ngrx/store';
import { AppState } from '../../app-store/app.states';
import { User } from 'src/app/models/user-models';
import { UserService } from '../../core/api-calls/user.service';
import { ApiHttpService } from '../../core/services/api-http.service.service'
import { UserCardsComponent } from 'src/app/user-dashboard/user-cards/user-cards.component';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs/operators';
import { LogIn } from 'src/app/app-store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  navigationStart: NavigationStart;
  loading = true;
  user: User = new User();
  email: FormControl;
  password: FormControl;
  loginForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private userservice: UserService, private apiServices: ApiHttpService, private store: Store<AppState> ) {
    router.events.subscribe((routerEvent: Event)=> {
      this.checkRouterEvent(routerEvent);
    });
   }

   checkRouterEvent(routerEvent: Event): void{
     if(routerEvent instanceof NavigationStart){
       this.loading = true;
     }

     if(routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel){
          this.loading = false;
        }
       if(routerEvent instanceof NavigationError){
         this.loading = false;
       }
   }

  ngOnInit(): void {
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
  adClass(){
    var element = document.getElementById("submitBtn");
    element.classList.add("disable");
  }

  onSubmit(){

      console.log(this.user);
      this.toastr.info("Welcome back" + " " + this.user.email);
      this.apiServices.post(this.userservice.loginUser(), this.loginForm.value)
      .pipe(first ()).subscribe(response =>{
        console.log(response);
        const payload = {
          email:this.email
        }
        this.router.navigate(['/user/profile']);
        this.store.dispatch(new LogIn(payload))
      })




        // if(!data){
        //   this.router.navigate(['/login']);
        // }


    }
}
