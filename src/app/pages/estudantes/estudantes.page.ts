import { Component, OnInit } from '@angular/core';
import { Estudante } from 'src/app/models/estudante';
import { EstudanteService } from 'src/app/services/estudante.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.page.html',
  styleUrls: ['./estudantes.page.scss'],
})
export class EstudantesPage implements OnInit {

  estudantes:Estudante[] = []
  constructor(private service: EstudanteService) { }

  ngOnInit() {
    this.loadEstudantes();
  }

  loadEstudantes() {
    this.service.getEstudantes().subscribe(
      {
        next: produts => this.estudantes=produts
      }
    );
  }
}
