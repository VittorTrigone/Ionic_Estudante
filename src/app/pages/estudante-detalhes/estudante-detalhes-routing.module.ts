import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudanteDetalhesPage } from './estudante-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: EstudanteDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudanteDetalhesPageRoutingModule {}
