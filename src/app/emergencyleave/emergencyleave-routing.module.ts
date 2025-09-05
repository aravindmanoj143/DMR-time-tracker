import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyleavePage } from './emergencyleave.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyleavePageRoutingModule {}
