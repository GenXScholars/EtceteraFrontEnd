import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiHttpService } from './services/api-http.service.service';
import { ApiEndpointsService } from './services/api-endpoints.service.service';





@NgModule({
  declarations: [
    ApiHttpService,
    ApiEndpointsService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
