import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudantesPage } from './estudantes.page';

const routes: Routes = [
  {
    path: '',
    component: EstudantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudantesPageRoutingModule {}
