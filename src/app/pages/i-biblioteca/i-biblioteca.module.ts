import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IBibliotecaPageRoutingModule } from './i-biblioteca-routing.module';

import { IBibliotecaPage } from './i-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IBibliotecaPageRoutingModule
  ],
  declarations: [IBibliotecaPage]
})
export class IBibliotecaPageModule {}
