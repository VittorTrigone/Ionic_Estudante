import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'estudantes',
    pathMatch: 'full'
  },
  {
    path: 'estudantes',
    loadChildren: () => import('./pages/estudantes/estudantes.module').then( m => m.EstudantesPageModule)
  },
  {
    path: 'estudantes/:id',
    loadChildren: () => import('./pages/estudante-detalhes/estudante-detalhes.module').then( m => m.EstudanteDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
