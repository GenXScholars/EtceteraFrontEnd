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
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';



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

  {
    path: 'user',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'merchant',
    loadChildren: () => import('./merchant-dashboard/merchant-dashboard.module').then(m => m.MerchantDashboardModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
