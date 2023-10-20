
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  // sirve para enviar datos fuera del packete counter
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  // sirve para traer datos fuera del packete 
  imports: [
    CommonModule,
  ]
})
export class HeroesModule {

}




