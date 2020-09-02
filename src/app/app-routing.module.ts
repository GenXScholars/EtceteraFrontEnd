import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatacardComponent } from './components/datacard/datacard.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DstvComponent } from './components/dstv/dstv.component';
import { GotvComponent } from './components/gotv/gotv.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsComponent } from './components/terms/terms.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {MerchantLoginComponent} from './components/merchant-login/merchant-login.component';
import {AdminLoginComponent} from './admin-dashboard/admin-login/admin-login.component';
import {SliderComponent} from './components/slider/slider.component';
import {DatabundleComponent} from './components/databundle/databundle.component';
import {MidnavComponent} from './components/midnav/midnav.component';
import {TvComponent} from './components/tv/tv.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'mobile', component: DatacardComponent},
  {path: 'dstv', component: DstvComponent},
  {path: 'gotv', component: GotvComponent},
  {path: 'electricity', component: ElectricityComponent},
  {path: 'bankTransfer', component: TransferComponent},
  {path: 'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'contact', component: ContactComponent},
  {path:'faq', component: FaqComponent},
  {path:'policy', component: TermsComponent},
  {path:'about', component: AboutComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'merchant-login', component: MerchantLoginComponent},
  {path:'admin-login', component: AdminLoginComponent},
  {path:'slider', component: SliderComponent},
  {path:'databundle', component: DatabundleComponent},
  {path:'midnav', component: MidnavComponent},
  {path:'tv', component: TvComponent},

  {
    path: 'user',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'merchant',
    loadChildren: () => import('./merchant-dashboard/merchant-dashboard.module').then(m => m.MerchantDashboardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
