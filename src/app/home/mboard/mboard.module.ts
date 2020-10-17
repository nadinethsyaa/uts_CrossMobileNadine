import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MboardPageRoutingModule } from './mboard-routing.module';

import { MboardPage } from './mboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MboardPageRoutingModule
  ],
  declarations: [MboardPage]
})
export class MboardPageModule {}
