import { Component, OnInit } from '@angular/core';
import { Listar } from '../interface/landing.interface';
import { LandingPendienteService } from '../landing-pendiente.service';

@Component({
  selector: 'app-landing-pendiente',
  templateUrl: './landing-pendiente.component.html',
  styleUrls: ['./landing-pendiente.component.css']
})
export class LandingPendienteComponent {

  public landing : Listar [] = [
    {
      listar : 'Gastos', completed: false
    }
  ]

  addListar = (listar : Listar) => {
    this.landing.push(listar)
  }
 
  constructor(public canasta : LandingPendienteService ){
    
  }
}
