import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiHttpService } from './services/api-http.service.service';
import { ApiEndpointsService } from './services/api-endpoints.service.service';
import { FundWalletsAccessBnkService } from './api-calls/fund-wallets-access-bnk.service';
import { FundWalletsCardService } from './api-calls/fund-wallets-card.service';
import { FundWalletsFirstbnkService } from './api-calls/fund-wallets-firstbnk.service';
import { FundWalletsGtBnkService } from './api-calls/fund-wallets-gt-bnk.service';
import { FundWalletsProvidusBnkService } from './api-calls/fund-wallets-providus-bnk.service';
import { GuestPaymentServicesService } from './api-calls/guest-payment-services.service';
import { UserService } from './api-calls/user.service';
import { MerchantService } from './api-calls/merchant.service';
import { AdminService } from './api-calls/admin.service';
import { CreditCardsServicesService } from './api-calls/credit-cards-services.service';
import { WalletsService } from './api-calls/wallets.service';
import { WalletsInDbService } from './api-calls/wallets-in-db.service';
import { MobileDataService } from './api-calls/mtn-data.service';
import { MobileAirtimeService } from './api-calls/mobile-airtime.service';
import { IKEDCService } from './api-calls/ikedc.service';
import { IBEDCService } from './api-calls/ibedc.service';
import { EEDCService } from './api-calls/eedc.service';
import { EKEDCService } from './api-calls/ekedc.service';
import { DSTVService } from './api-calls/dstv.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ApiHttpService,
    ApiEndpointsService,
    FundWalletsAccessBnkService,
    FundWalletsCardService,
    FundWalletsFirstbnkService,
    FundWalletsGtBnkService,
    FundWalletsProvidusBnkService,
    GuestPaymentServicesService,
    UserService,
    MerchantService,
    AdminService,
    CreditCardsServicesService,
    WalletsService,
    WalletsInDbService,
    MobileDataService,
    MobileAirtimeService,
    IKEDCService,
    IBEDCService,
    EEDCService,
    EKEDCService,
    DSTVService
      ]
})
export class CoreModule { }
