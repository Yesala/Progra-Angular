import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-form-gastos',
  templateUrl: './landing-form-gastos.component.html',
  styleUrls: ['./landing-form-gastos.component.css']
})
export class LandingFormGastosComponent implements OnInit {

  contactForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm()
    this.onPathValue()
  }

  initForm() : FormGroup{
    return this.formBuilder.group ({
      name : ['', [Validators.required, Validators.minLength(3)]],
      accept : ['', [Validators.required]],
      operativeSystem : ['', [Validators.required]],
      comment : ['']
    })
  }

  onPathValue() {
    this.contactForm.patchValue( { name : '' } )
  }

  onSubmit() {
    console.log(this.contactForm)
  }

}
