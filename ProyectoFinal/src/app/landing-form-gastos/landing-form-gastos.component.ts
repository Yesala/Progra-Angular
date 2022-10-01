import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-form-gastos',
  templateUrl: './landing-form-gastos.component.html',
  styleUrls: ['./landing-form-gastos.component.css']
})
export class LandingFormGastosComponent implements OnInit {

  gastosForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.gastosForm = this.initForm()
    this.onPathValue()
  }

  initForm() : FormGroup{
    return this.formBuilder.group ({
      gasto : ['', [Validators.required]],
      tipoGasto : [''],
      cantidadGastada : ['', [Validators.required]],
      comment : ['']
    })
  }

  onPathValue() {
    this.gastosForm.patchValue( { name : '' } )
  }

  onSubmit() {
    console.log(this.gastosForm)
  }

}
