import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MboardPage } from './mboard.page';

const routes: Routes = [
  {
    path: '',
    component: MboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MboardPageRoutingModule {}
