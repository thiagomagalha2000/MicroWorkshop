import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './listar-cursos/listar-cursos.component';

const routes: Routes = [
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:id', component: CursoComponent},

  {path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }