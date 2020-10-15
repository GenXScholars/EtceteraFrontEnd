import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundwByCardComponent } from './fundw-by-card/fundw-by-card.component';
import { FundwByProvidusComponent } from './fundw-by-providus/fundw-by-providus.component';
import { FundwByGtBnkComponent } from './fundw-by-gt-bnk/fundw-by-gt-bnk.component';
import { FundwByFirstBnkComponent } from './fundw-by-first-bnk/fundw-by-first-bnk.component';
import { FundwByAcessbnkComponent } from './fundw-by-acessbnk/fundw-by-acessbnk.component';
import { GuestPaymentComponent } from './guest-payment/guest-payment.component';
import { PaymentsRoutingModule } from './payment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [FundwByCardComponent, FundwByProvidusComponent, FundwByGtBnkComponent, FundwByFirstBnkComponent, FundwByAcessbnkComponent, GuestPaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaymentsRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PaymentModule { }
