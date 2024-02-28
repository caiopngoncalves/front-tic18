import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormChangeService } from '../services/form-change.service';

@Component({
  selector: 'app-formulario-comum',
  templateUrl: './formulario-comum.component.html',
  styleUrls: ['./formulario-comum.component.css']
})
export class FormularioComumComponent implements OnInit {
  @ViewChild('formulario') aviaoForm: NgForm | undefined;

  constructor(private formChangeService: FormChangeService) {}

  ngOnInit() {
    this.aviaoForm?.form.valueChanges.subscribe(value => {
      this.formChangeService.addChange(value);
    });
  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);

    this.formChangeService.getChanges().subscribe(changes => {
      console.log(changes);
    });
  }

  sugereNome(){
    this.aviaoForm?.form.patchValue({
      grupo1: {
        modelo: 'Boeing 737'
      }
    })
  }
}