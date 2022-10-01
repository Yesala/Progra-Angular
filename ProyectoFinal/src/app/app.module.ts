import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPostModule } from './landing-post/landing-post.module';
import { LandingFormGastosComponent } from './landing-form-gastos/landing-form-gastos.component';
import { LandingFormPendienteComponent } from './landing-form-pendiente/landing-form-pendiente.component';
import { LandingGastosComponent } from './landing-gastos/landing-gastos.component';
import { LandingHistorialComponent } from './landing-historial/landing-historial.component';
import { LandingListaComponent } from './landing-lista/landing-lista.component';
import { LandingPendienteComponent } from './landing-pendiente/landing-pendiente.component';
import { LandingPostComponent } from './landing-post/landing-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LandingPostModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


