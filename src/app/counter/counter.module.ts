import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  // sirve para declarar la clases
  declarations:[
    CounterComponent,
  ],
  // sirve para enviar datos fuera del packete counter
  exports:[
    CounterComponent,
  ],
})
export class CounterModule {

}


