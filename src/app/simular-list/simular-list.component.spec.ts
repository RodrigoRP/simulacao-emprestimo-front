import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularListComponent } from './simular-list.component';

describe('SimularListComponent', () => {
  let component: SimularListComponent;
  let fixture: ComponentFixture<SimularListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimularListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
