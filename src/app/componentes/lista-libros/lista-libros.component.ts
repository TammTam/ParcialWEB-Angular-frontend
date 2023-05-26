import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.module';
import { LibroService } from '../../libro.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.libroService.obtenerLibros()
      .subscribe(libros => {
        this.libros = libros;
      });
  }
}