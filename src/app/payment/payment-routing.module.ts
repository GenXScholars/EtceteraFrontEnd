import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundwByAcessbnkComponent } from './fundw-by-acessbnk/fundw-by-acessbnk.component';
import { FundwByCardComponent } from './fundw-by-card/fundw-by-card.component';
import { FundwByFirstBnkComponent } from './fundw-by-first-bnk/fundw-by-first-bnk.component';
import { FundwByGtBnkComponent } from './fundw-by-gt-bnk/fundw-by-gt-bnk.component';
import { FundwByProvidusComponent } from './fundw-by-providus/fundw-by-providus.component';
import { GuestPaymentComponent } from './guest-payment/guest-payment.component';




const routes: Routes = [
  {path: 'fundByCard', component: FundwByCardComponent},
  {path:'fundbyFirstBnk', component: FundwByFirstBnkComponent},
  {path: 'fundByProvidus', component: FundwByProvidusComponent},
  {path: 'fundByGtBank', component: FundwByGtBnkComponent},
  {path: 'funByAccessBnk', component: FundwByAcessbnkComponent},
  {path: 'guestPayment', component: GuestPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
