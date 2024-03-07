import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Atendimento } from '../atendimento.model';
@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrl: './listar-atendimento.component.css'
})
export class ListarAtendimentoComponent implements OnInit {

  loadedAtendimento: Atendimento[] = [];
  constructor(private dataBaseService:DataBaseService) { }

  ngOnInit():void{
    this.getAtendimento();
  }

  getAtendimento(){
    this.dataBaseService.getAtendimentos().subscribe((responseData : Atendimento[]) => {
      console.log(responseData);
      this.loadedAtendimento = responseData;
      console.log(this.loadedAtendimento);     
    });
  }
  apagarTudo(){
    this.dataBaseService.deleteAllAtendimento().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedAtendimento = [];
    });
  }
}