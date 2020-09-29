import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundwByCardComponent } from './fundw-by-card/fundw-by-card.component';
import { FundwByProvidusComponent } from './fundw-by-providus/fundw-by-providus.component';
import { FundwByGtBnkComponent } from './fundw-by-gt-bnk/fundw-by-gt-bnk.component';
import { FundwByFirstBnkComponent } from './fundw-by-first-bnk/fundw-by-first-bnk.component';
import { FundwByAcessbnkComponent } from './fundw-by-acessbnk/fundw-by-acessbnk.component';
import { GuestPaymentComponent } from './guest-payment/guest-payment.component';
import { PaymentsRoutingModule } from './payment-routing.module';



@NgModule({
  declarations: [FundwByCardComponent, FundwByProvidusComponent, FundwByGtBnkComponent, FundwByFirstBnkComponent, FundwByAcessbnkComponent, GuestPaymentComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentModule { }
