import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMotherboardPage } from './edit-mboard.page';

const routes: Routes = [
  {
    path: '',
    component: EditMotherboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMboardPageRoutingModule {}
