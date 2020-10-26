import {  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantRoutingModule } from './merchant-dashboard/merchant-routing.module';
import { MaterialModule } from '../material/material.module';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MregisterComponent } from './mregister/mregister.component';
import { ProfileRoutingModule } from './edit-profile/profile-routing.module';
import { MerchantNavComponent} from './merchant-nav/merchant-nav.component';
import { MerchantAsideComponent } from './merchant-aside/merchant-aside.component';




@NgModule({
  declarations: [
    MerchantDashboardComponent,
    MerchantLoginComponent,
    EditProfileComponent,
    MregisterComponent,
    MerchantNavComponent,
    MerchantAsideComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MerchantRoutingModule,
    MaterialModule,
    ProfileRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchantDashboardModule { }
