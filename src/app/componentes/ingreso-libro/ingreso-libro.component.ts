import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.module';
import { LibroService } from '../../libro.service';

@Component({
  selector: 'app-ingreso-libro',
  templateUrl: './ingreso-libro.component.html',
  styleUrls: ['./ingreso-libro.component.css']
})
export class IngresoLibroComponent implements OnInit {
  libro: Libro = {
    titulo: '',
    referencia: '',
    autor: '',
    precio: 0,
    ubicacion: ''
  };

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
  }

  agregarLibro(): void {
    this.libroService.agregarLibro(this.libro).subscribe(libro => {
      console.log('Libro agregado:', libro);
      this.libro = {
        titulo: '',
        referencia: '',
        autor: '',
        precio: 0,
        ubicacion: ''
      };
    });
  }
}