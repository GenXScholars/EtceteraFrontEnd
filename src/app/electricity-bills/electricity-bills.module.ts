import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IKEDCComponent } from './ikedc/ikedc.component';
import { IBEDCComponent } from './ibedc/ibedc.component';
import { EKEDCComponent } from './ekedc/ekedc.component';
import { EEDCComponent } from './eedc/eedc.component';
import { ElectricityBillsRoutingModule } from './electricity-bills-routing.module';



@NgModule({
  declarations: [IKEDCComponent, IBEDCComponent, EKEDCComponent, EEDCComponent],
  imports: [
    CommonModule,
    ElectricityBillsRoutingModule
  ]
})
export class ElectricityBillsModule { }
