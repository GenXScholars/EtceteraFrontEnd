import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminDashboardComponent,
    AdminLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminDashboardModule { }
