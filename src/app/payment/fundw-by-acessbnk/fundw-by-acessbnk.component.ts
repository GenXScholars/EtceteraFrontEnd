import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardsModels } from 'src/app/models/credit-cards-models';

@Component({
  selector: 'app-fundw-by-acessbnk',
  templateUrl: './fundw-by-acessbnk.component.html',
  styleUrls: ['./fundw-by-acessbnk.component.scss']
})
export class FundwByAcessbnkComponent implements OnInit {
  accessBank: CreditCardsModels = new CreditCardsModels();
  cardNumber: FormControl;
  cardExpiryDate: FormControl;
  fundByAcessBank : FormGroup;
  constructor(private fb: FormBuilder ) { }



  ngOnInit(): void {

    this.cardNumber = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.cardExpiryDate = new FormControl('', [Validators.required]);


    this.fundByAcessBank = new FormGroup({
      cardNumber:this.cardNumber,
      cardExpiryDate:this.cardExpiryDate
    })
  }

  getErrorMessage() {
    if (this.cardNumber.hasError('required')) {
      return 'You must enter a value';
    }

    return this.cardNumber.hasError('email') ? 'Not a valid email' : '';
  }

}
