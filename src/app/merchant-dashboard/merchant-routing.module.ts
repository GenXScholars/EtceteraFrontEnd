import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MregisterComponent } from './mregister/mregister.component';


const routes: Routes = [
  {path: '', component: MerchantDashboardComponent},
  {path:'/edit-profile', component: EditProfileComponent},
  {path:'/register', component: MregisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
