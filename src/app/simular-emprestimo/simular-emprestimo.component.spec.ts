import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularEmprestimoComponent } from './simular-emprestimo.component';

describe('SimularEmprestimoComponent', () => {
  let component: SimularEmprestimoComponent;
  let fixture: ComponentFixture<SimularEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimularEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
