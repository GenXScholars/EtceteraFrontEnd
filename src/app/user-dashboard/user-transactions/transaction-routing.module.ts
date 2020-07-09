import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTransactionsComponent } from './user-transactions.component';


const routes: Routes = [
  {
    path: 'transactions',
    component: UserTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
