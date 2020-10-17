import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRamPageRoutingModule } from './edit-ram-routing.module';

import { EditRamPage } from './edit-ram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRamPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditRamPage]
})
export class EditRamPageModule {}
