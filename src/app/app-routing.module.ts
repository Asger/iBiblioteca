import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./pages/autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./pages/curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'i-biblioteca',
    loadChildren: () => import('./pages/i-biblioteca/i-biblioteca.module').then( m => m.IBibliotecaPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
