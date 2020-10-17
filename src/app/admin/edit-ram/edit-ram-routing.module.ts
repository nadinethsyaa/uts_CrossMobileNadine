import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRamPage } from './edit-ram.page';

const routes: Routes = [
  {
    path: '',
    component: EditRamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRamPageRoutingModule {}
