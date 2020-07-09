import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantDashboardComponent } from './merchant-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: MerchantDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
