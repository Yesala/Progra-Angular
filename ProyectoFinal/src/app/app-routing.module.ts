import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingGastosComponent } from './landing-gastos/landing-gastos.component';
import { LandingHistorialComponent } from './landing-historial/landing-historial.component';
import { LandingPendienteComponent } from './landing-pendiente/landing-pendiente.component';
import { LandingComponent } from './landing/landing.component';
import { LandingPostComponent } from './landing-post/landing-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'landing-pendiente', component: LandingPendienteComponent},
  {path: 'landing-gastos', component: LandingGastosComponent},
  {path: 'landing-historial', component: LandingHistorialComponent},
  {path: 'landing-post', component: LandingPostComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
