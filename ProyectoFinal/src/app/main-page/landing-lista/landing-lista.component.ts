import { Component, Input} from '@angular/core';
import { Listar } from '../interface/landing.interface';

@Component({
  selector: 'app-landing-lista',
  templateUrl: './landing-lista.component.html',
  styleUrls: ['./landing-lista.component.css']
})
export class LandingListaComponent {

  @Input ('data') listas : Listar [] = []

}
