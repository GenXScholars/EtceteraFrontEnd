import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-fundw-by-first-bnk',
  templateUrl: './fundw-by-first-bnk.component.html',
  styleUrls: ['./fundw-by-first-bnk.component.scss']
})
export class FundwByFirstBnkComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  fName = new FormControl('', [Validators.required, Validators.minLength(2)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter Email';
    }
    else if (this.fName.hasError('required'))
    {
       return 'You must enter a value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  }



