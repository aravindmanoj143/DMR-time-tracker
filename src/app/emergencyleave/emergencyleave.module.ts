import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyleavePageRoutingModule } from './emergencyleave-routing.module';

import { EmergencyleavePage } from './emergencyleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyleavePageRoutingModule
  ],
  declarations: [EmergencyleavePage]
})
export class EmergencyleavePageModule {}
