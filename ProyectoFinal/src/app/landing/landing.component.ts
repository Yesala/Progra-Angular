import { Component, OnInit } from '@angular/core';
import { Listar } from '../interface/landing.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  public landing : Listar [] = [
    {
      listar : 'Gastos', completed: false
    }
  ]

  addListar = (listar : Listar) => {
    this.landing.push(listar)
  }

}
