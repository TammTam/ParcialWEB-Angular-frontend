export class Libro {
    titulo: string;
    referencia: string;
    autor: string;
    precio: number;
    ubicacion: string;
  
    constructor(
      titulo: string,
      referencia: string,
      autor: string,
      precio: number,
      ubicacion: string
    ) {
      this.titulo = titulo || '';
      this.referencia = referencia || '';
      this.autor = autor || '';
      this.precio = precio || 0;
      this.ubicacion = ubicacion || '';
    }
  }