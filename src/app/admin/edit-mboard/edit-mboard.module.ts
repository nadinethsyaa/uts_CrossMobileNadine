import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMboardPageRoutingModule } from './edit-mboard-routing.module';

import { EditMotherboardPage } from './edit-mboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMboardPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditMotherboardPage]
})
export class EditMboardPageModule {}
