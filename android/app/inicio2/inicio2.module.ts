import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Componente1Component } from '../components/componente1/componente1.component';
import { IonicModule } from '@ionic/angular';

import { Inicio2PageRoutingModule } from './inicio2-routing.module';

import { Inicio2Page } from './inicio2.page';
import { Componente2Component } from '../components/componente2/componente2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Inicio2PageRoutingModule
  ],
  declarations: [Inicio2Page, Componente1Component, Componente2Component]
})
export class Inicio2PageModule {}
