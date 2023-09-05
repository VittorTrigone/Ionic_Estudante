import { ActivatedRoute } from '@angular/router';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Estudante } from './../../models/estudante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudante-detalhes',
  templateUrl: './estudante-detalhes.page.html',
  styleUrls: ['./estudante-detalhes.page.scss'],
})

export class EstudanteDetalhesPage implements OnInit {

  estudante: Estudante = {} as Estudante;

  constructor( private route: ActivatedRoute,
               private service: EstudanteService
             ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.getEstudanteById(id).subscribe(
       {
          next: estudante => this.estudante = estudante
        }
      )
    }
  }
}
