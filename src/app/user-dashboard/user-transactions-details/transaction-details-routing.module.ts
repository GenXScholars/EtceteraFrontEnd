import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTransactionsDetailsComponent } from './user-transactions-details.component';


const routes: Routes = [
  {
    path: 'transaction-details',
    component: UserTransactionsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionDetailsRoutingModule { }
