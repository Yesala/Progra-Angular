import { Component, Input} from '@angular/core';
import { Listar } from '../interface/landing.interface';

@Component({
  selector: 'app-landing-form-pendiente',
  templateUrl: './landing-form-pendiente.component.html',
  styleUrls: ['./landing-form-pendiente.component.css']
})
export class LandingFormPendienteComponent{

  @Input ('addListar') addListar : any 

  landing : Listar = {
    listar : '',
    completed : false
  }

  title : string = 'Lista de Pendientes'
  placeholder : string = 'Ingrese el pendiente'

  addWithEvent(e : any){
    this.landing.listar = e.target[0].value
    this.addListar({...this.landing})
    this.landing = { listar : '', completed : false }
    e.target[0].value = ''
  }

  add(){
    this.addListar({...this.landing})
    this.landing = { listar : '', completed : false}
  }

  inputHandler (e : any){

  }
}
