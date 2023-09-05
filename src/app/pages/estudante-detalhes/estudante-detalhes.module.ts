import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudanteDetalhesPageRoutingModule } from './estudante-detalhes-routing.module';

import { EstudanteDetalhesPage } from './estudante-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudanteDetalhesPageRoutingModule
  ],
  declarations: [EstudanteDetalhesPage]
})
export class EstudanteDetalhesPageModule {}
