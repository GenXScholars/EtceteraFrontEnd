import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantRoutingModule } from './merchant-dashboard/merchant-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MerchantDashboardComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchantDashboardModule { }
