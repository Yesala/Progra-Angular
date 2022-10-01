import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingGastosComponent } from './main-page/landing-gastos/landing-gastos.component';
import { LandingHistorialComponent } from './main-page/landing-historial/landing-historial.component';
import { LandingPendienteComponent } from './main-page/landing-pendiente/landing-pendiente.component';
import { LandingComponent } from './main-page/landing/landing.component';
import { LandingPostComponent } from './main-page/landing-post/landing-post.component';
import { NotFoundComponent } from './main-page/not-found/not-found.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
