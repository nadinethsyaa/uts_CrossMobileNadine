import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCpuPageRoutingModule } from './edit-cpu-routing.module';

import { EditCpuPage } from './edit-cpu.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditCpuPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EditCpuPage]
})
export class EditCpuPageModule {}
