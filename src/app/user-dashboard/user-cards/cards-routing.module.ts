import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCardsComponent } from './user-cards.component';


const routes: Routes = [
  {
    path: 'cards',
    component: UserCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
