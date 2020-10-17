import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCpuPage } from './edit-cpu.page';

const routes: Routes = [
  {
    path: '',
    component: EditCpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCpuPageRoutingModule {}
