import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantRoutingModule } from './merchant-dashboard/merchant-routing.module';



@NgModule({
  declarations: [MerchantDashboardComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
  ]
})
export class MerchantDashboardModule { }
