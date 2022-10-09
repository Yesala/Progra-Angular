import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteReutilizableComponent } from './componente-reutilizable/componente-reutilizable.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteReutilizableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ComponenteReutilizableComponent]
})
export class AppModule {
  constructor (private injector : Injector){
    const componenteReutilizable = createCustomElement(
      ComponenteReutilizableComponent, {
        injector : this.injector
      }
    )
    customElements.define('componente-reutilizable', componenteReutilizable)
  }
  ngDoBootstrap() : void{};
 }
