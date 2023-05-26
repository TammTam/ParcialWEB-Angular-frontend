import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoLibroComponent } from './componentes/ingreso-libro/ingreso-libro.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingreso-libro', pathMatch: 'full' },
  { path: 'ingreso-libro', component: IngresoLibroComponent },
  { path: 'lista-libros', component: ListaLibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }