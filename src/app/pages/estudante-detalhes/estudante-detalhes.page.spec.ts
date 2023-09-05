import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudanteDetalhesPage } from './estudante-detalhes.page';

describe('EstudanteDetalhesPage', () => {
  let component: EstudanteDetalhesPage;
  let fixture: ComponentFixture<EstudanteDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudanteDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
