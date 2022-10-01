import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './main-page/landing/landing.component';
import { NotFoundComponent } from './main-page/not-found/not-found.component';
import { LandingPostModule } from './main-page/landing-post/landing-post.module';
import { LandingFormGastosComponent } from './main-page/landing-form-gastos/landing-form-gastos.component';
import { LandingFormPendienteComponent } from './main-page/landing-form-pendiente/landing-form-pendiente.component';
import { LandingGastosComponent } from './main-page/landing-gastos/landing-gastos.component';
import { LandingHistorialComponent } from './main-page/landing-historial/landing-historial.component';
import { LandingListaComponent } from './main-page/landing-lista/landing-lista.component';
import { LandingPendienteComponent } from './main-page/landing-pendiente/landing-pendiente.component';
import { LandingPostComponent } from './main-page/landing-post/landing-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingGastosComponent,
    LandingHistorialComponent,
    LandingPendienteComponent,
    LandingListaComponent,
    LandingFormGastosComponent,
    LandingFormPendienteComponent,
    LandingPostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LandingPostModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


