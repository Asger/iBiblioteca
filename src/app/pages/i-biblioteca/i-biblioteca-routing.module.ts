import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IBibliotecaPage } from './i-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: IBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IBibliotecaPageRoutingModule {}
