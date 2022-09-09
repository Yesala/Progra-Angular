import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingHistorialComponent } from './landing-historial/landing-historial.component';
import { LandingGastosComponent } from './landing-gastos/landing-gastos.component';
import { LandingListaComponent } from './landing-lista/landing-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingFormPendienteComponent } from './landing-form-pendiente/landing-form-pendiente.component';
import { RouterModule } from '@angular/router';
import { LandingPendienteComponent } from './landing-pendiente/landing-pendiente.component';
import { LandingFormGastosComponent } from './landing-form-gastos/landing-form-gastos.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingHistorialComponent,
    LandingGastosComponent,
    LandingListaComponent,
    LandingFormPendienteComponent,
    LandingPendienteComponent,
    LandingFormGastosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'landing-pendiente', component: LandingPendienteComponent},
      {path: 'landing-gastos', component: LandingGastosComponent},
      {path: 'landing-historial', component: LandingHistorialComponent},
    ]),
    ReactiveFormsModule
  ],
  exports: [
    LandingComponent
  ]
})
export class MainPageModule { }
