import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-payment',
  templateUrl: './guest-payment.component.html',
  styleUrls: ['./guest-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestPaymentComponent implements OnInit {


  email: FormControl
  message: FormControl
  paymentForm : FormGroup

  constructor(private router:Router, private fb: FormBuilder){

  }


  ngOnInit(){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [Validators.required, Validators.email]);
    this.paymentForm = new FormGroup({
      email:this.email,
      message:this.message
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  makePayment(contactForm){
    // make payment login goes here
    if(contactForm.invalid){
      window.alert("please ill in the necessary ields")
    }
    window.alert("thank you or shopping with us")
  }

}
