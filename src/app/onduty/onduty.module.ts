import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndutyPageRoutingModule } from './onduty-routing.module';

import { OndutyPage } from './onduty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndutyPageRoutingModule
  ],
  declarations: [OndutyPage]
})
export class OndutyPageModule {}
