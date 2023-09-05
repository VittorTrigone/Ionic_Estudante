import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudante } from '../models/estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  getEstudantes():Observable<Estudante[]>{
    return this.http.get<Estudante[]>(`${environment.baseUrl}/estudantes`);
  }

  getEstudanteById(id:string):Observable<Estudante>{
    return this.http.get<Estudante>(`${environment.baseUrl}/estudantes/${id}`);
  }
}
