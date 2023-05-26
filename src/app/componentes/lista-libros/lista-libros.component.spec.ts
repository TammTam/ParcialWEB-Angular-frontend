import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaLibrosComponent } from './lista-libros.component';
import { LibroService } from '../../libro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Libro } from '../../models/libro.module';

describe('ListaLibrosComponent', () => {
  let component: ListaLibrosComponent;
  let fixture: ComponentFixture<ListaLibrosComponent>;
  let libroService: LibroService;

  const librosMock: Libro[] = [
    { titulo: 'Libro 1', referencia: 'Referencia 1', autor: 'Autor 1', precio: 10.99, ubicacion: 'Ubicación 1' },
    { titulo: 'Libro 2', referencia: 'Referencia 2', autor: 'Autor 2', precio: 19.99, ubicacion: 'Ubicación 2' },
    { titulo: 'Libro 3', referencia: 'Referencia 3', autor: 'Autor 3', precio: 14.99, ubicacion: 'Ubicación 3' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaLibrosComponent],
      imports: [HttpClientTestingModule],
      providers: [LibroService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLibrosComponent);
    component = fixture.componentInstance;
    libroService = TestBed.inject(LibroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get libros on initialization', () => {
    spyOn(libroService, 'obtenerLibros').and.returnValue(of(librosMock));

    fixture.detectChanges();

    expect(component.libros).toEqual(librosMock);
  });
});