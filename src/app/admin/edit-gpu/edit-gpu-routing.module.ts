import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGpuPage } from './edit-gpu.page';

const routes: Routes = [
  {
    path: '',
    component: EditGpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGpuPageRoutingModule {}
