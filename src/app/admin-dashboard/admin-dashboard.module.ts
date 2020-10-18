import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminViewMerchantsComponent } from './admin-view-merchants/admin-view-merchants.component';
import { SuperAdminViewAdminsComponent } from './super-admin-view-admins/super-admin-view-admins.component';
import { MaterialModule } from '../material/material.module';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [
    AdminLoginComponent,
    AdminProfileComponent,
    AdminViewUsersComponent,
    AdminViewMerchantsComponent,
    SuperAdminViewAdminsComponent,
    AdminRegistrationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminDashboardModule { }
