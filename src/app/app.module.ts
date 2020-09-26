import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { DatacardComponent } from './components/datacard/datacard.component';
import { ElectricityComponent } from './components/electricity/electricity.component';
import { DstvComponent } from './components/dstv/dstv.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { GotvComponent } from './components/gotv/gotv.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MerchantDashboardModule } from './merchant-dashboard/merchant-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { FaqComponent } from './components/faq/faq.component';
import { TermsComponent } from './components/terms/terms.component';
import {SliderComponent} from './components/slider/slider.component';
import {DatabundleComponent} from './components/databundle/databundle.component';
import {MidnavComponent} from './components/midnav/midnav.component';
import {TvComponent} from './components/tv/tv.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CoreModule } from './core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    DatacardComponent,
    ElectricityComponent,
    DstvComponent,
    TransferComponent,
    GotvComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent,
    TermsComponent,
    SliderComponent,
    DatabundleComponent,
    MidnavComponent,
    TvComponent,
    NotFoundPageComponent,
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    UserDashboardModule,
    MerchantDashboardModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
