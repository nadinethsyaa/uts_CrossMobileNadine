import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGpuPageRoutingModule } from './edit-gpu-routing.module';

import { EditGpuPage } from './edit-gpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGpuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditGpuPage]
})
export class EditGpuPageModule {}
