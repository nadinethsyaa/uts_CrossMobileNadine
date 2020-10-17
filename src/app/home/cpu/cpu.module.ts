import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPUDetailPageRoutingModule } from './cpu-routing.module';
import { CpuPage } from './cpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPUDetailPageRoutingModule
  ],
  declarations: [CpuPage]
})
export class CpuPageModule {}
