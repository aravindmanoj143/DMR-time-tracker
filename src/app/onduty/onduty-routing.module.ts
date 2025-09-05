import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';
import { OndutyPage } from './onduty.page';

const routes: Routes = [
  {
    path: '',
    component: OndutyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonDatetime, IonDatetimeButton, IonModal],
  exports: [RouterModule],
})
export class OndutyPageRoutingModule {}
