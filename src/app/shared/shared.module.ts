import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryStringParameters } from './classes/query-string-parameters';
import { AlertsComponent } from './alerts/alerts/alerts.component';



@NgModule({
  declarations: [QueryStringParameters, AlertsComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
