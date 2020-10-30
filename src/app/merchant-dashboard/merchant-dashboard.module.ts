import {  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantRoutingModule } from './merchant-routing.module';
import { MaterialModule } from '../material/material.module';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MregisterComponent } from './mregister/mregister.component';
import { appEffects, appReducer } from '../app-store/index';




@NgModule({
  declarations: [
    MerchantDashboardComponent,
    MerchantLoginComponent,
    EditProfileComponent,
    MregisterComponent

    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MerchantRoutingModule,
    MaterialModule,
    // StoreModule.forFeature(appReducer),
    // EffectsModule.forFeature(appEffects),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchantDashboardModule { }
