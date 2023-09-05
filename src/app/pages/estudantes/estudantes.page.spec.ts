import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudantesPage } from './estudantes.page';

describe('EstudantesPage', () => {
  let component: EstudantesPage;
  let fixture: ComponentFixture<EstudantesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
