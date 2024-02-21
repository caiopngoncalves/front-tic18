import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-comum',
  templateUrl: './formulario-comum.component.html',
  styleUrls: ['./formulario-comum.component.css']
})
export class FormularioComumComponent {
  @ViewChild('formulario') aviaoForm: NgForm | undefined;

  onSubmit(form: NgForm) {
    const formData = form.value;
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  }

  sugereNome(){
    this.aviaoForm?.form.patchValue({
      grupo1: {
        modelo: 'Boeing 737'
      }
      
    })
  }
}


 // onSubmit(formulario: NgForm){
  //   let { id, modelo, capacidade, empresa } = formulario.value;
  //   console.log(id, modelo, capacidade, empresa);
  // }
