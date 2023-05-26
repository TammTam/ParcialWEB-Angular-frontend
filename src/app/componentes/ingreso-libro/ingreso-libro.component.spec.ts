import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoLibroComponent } from './ingreso-libro.component';

describe('IngresoLibroComponent', () => {
  let component: IngresoLibroComponent;
  let fixture: ComponentFixture<IngresoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
