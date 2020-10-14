import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-dashboard/user-routing.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserTransactionsDetailsComponent } from './user-transactions-details/user-transactions-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardsRoutingModule } from './user-cards/cards-routing.module';
import { ProfileRoutingModule } from './user-profile/profile-routing.module';
import { SettingsRoutingModule } from './user-settings/settings-routing.module';
import { TransactionsRoutingModule } from './user-transactions/transaction-routing.module';
import { TransactionDetailsRoutingModule } from './user-transactions-details/transaction-details-routing.module';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserWalletRoutingModule } from './user-wallet/user-wallet-routing.module';




@NgModule({
  declarations: [UserDashboardComponent, UserSettingsComponent, UserTransactionsComponent, UserCardsComponent, UserTransactionsDetailsComponent, UserProfileComponent, UserWalletComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardsRoutingModule,
    ProfileRoutingModule,
    SettingsRoutingModule,
    TransactionsRoutingModule,
    TransactionDetailsRoutingModule,
    UserWalletRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserDashboardModule { }
