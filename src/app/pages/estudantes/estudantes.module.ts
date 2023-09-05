import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudantesPageRoutingModule } from './estudantes-routing.module';

import { EstudantesPage } from './estudantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudantesPageRoutingModule
  ],
  declarations: [EstudantesPage]
})
export class EstudantesPageModule {}
