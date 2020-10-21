import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminViewMerchantsComponent } from './admin-view-merchants/admin-view-merchants.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { SuperAdminViewAdminsComponent } from './super-admin-view-admins/super-admin-view-admins.component';



const routes: Routes = [
  {path: '', component:AdminProfileComponent },
  {path:'login', component: AdminLoginComponent},
  {path:'view-merchants', component: AdminViewMerchantsComponent},
  {path:'view-users', component: AdminViewUsersComponent},
  {path:'sview-admins', component: SuperAdminViewAdminsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
