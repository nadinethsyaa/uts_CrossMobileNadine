import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'edit-cpu/:id',
    loadChildren: () => import('./edit-cpu/edit-cpu.module').then( m => m.EditCpuPageModule)
  },
  {
    path: 'edit-gpu/:id',
    loadChildren: () => import('./edit-gpu/edit-gpu.module').then( m => m.EditGpuPageModule)
  },
  {
    path: 'edit-ram/:id',
    loadChildren: () => import('./edit-ram/edit-ram.module').then( m => m.EditRamPageModule)
  },
  {
    path: 'edit-mboard/:id',
    loadChildren: () => import('./edit-mboard/edit-mboard.module').then( m => m.EditMboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
