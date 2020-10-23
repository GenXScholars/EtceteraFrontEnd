import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationStart, Router, NavigationEnd, NavigationCancel, NavigationError, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { AppState } from 'src/app/app-store/app.states';
import { AdminService } from 'src/app/core/api-calls/admin.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service.service';
import { User } from 'src/app/models/user-models';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  getState: Observable<any>;
  errorMessage: string | null;
  navigationStart: NavigationStart;
  loading = true;
  user: User = new User();
  email: FormControl;
  password: FormControl;
  loginForm : FormGroup;
  constructor( private router:Router, private toastr: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService, private adminservice: AdminService, private apiServices: ApiHttpService, private store: Store<AppState> ) {
  //   router.events.pipe(
  //     filter((routerEvent: Event): routerEvent is RouterEvent => routerEvent instanceof RouterEvent)
  //  ).subscribe((routerEvent: Event) => {
  //   this.checkRouterEvent(routerEvent);
  //  });
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
  adClass(){
    var element = document.getElementById("submitBtn");
    element.classList.add("disable");
  }

  onSubmit(){

      console.log(this.user);
      this.toastr.info("Welcome back" + " " + this.user.email);
      this.apiServices.post(this.adminservice.loginAdmin(), this.loginForm.value)
      .pipe(first ()).subscribe(response =>{
        console.log(response);

      })
     setTimeout(() => {
      this.router.navigate(['/']);
     }, 5000);

        // if(!data){
        //   this.router.navigate(['/login']);
        // }


    }

}
