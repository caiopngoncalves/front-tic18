import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.css'
})
export class CadastrarAtendimentoComponent implements OnInit{

  constructor(private dataBaseService:DataBaseService){}



  ngOnInit(): void {
    this.dataBaseService.getAtendimentos();
  }

  addAtendimento(atendimentoForm: any){
    
    const atendimentoData = atendimentoForm.value;
    this.dataBaseService.addAtendimento(atendimentoData);
  }
}
