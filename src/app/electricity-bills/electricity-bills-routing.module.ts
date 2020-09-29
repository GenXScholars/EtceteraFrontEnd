import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EEDCComponent } from './eedc/eedc.component';
import { EKEDCComponent } from './ekedc/ekedc.component';
import { IBEDCComponent } from './ibedc/ibedc.component';
import { IKEDCComponent } from './ikedc/ikedc.component';

const routes: Routes = [
  {path:'buyEEDC', component: EEDCComponent},
  {path:'buyIKEDC', component: IKEDCComponent},
  {path: 'buyIBEDC', component: IBEDCComponent},
  {path: 'buyEKEDC', component: EKEDCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricityBillsRoutingModule { }
