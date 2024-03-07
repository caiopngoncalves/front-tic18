import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService } from '../data-base.service';
@Component({
  selector: 'app-detalhar-atendimento',
  templateUrl: './detalhar-atendimento.component.html',
  styleUrl: './detalhar-atendimento.component.css'
})
export class DetalharAtendimentoComponent {
  id:string = '';
  atendimentoDetails : any = {};

  constructor(private dataBaseService:DataBaseService, private rotas:Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getAtendimento(this.id);
  }

  getAtendimento(id: any){
    console.log("id-->"    + id);
    this.dataBaseService.getAtendimento(id).subscribe(responseData => {
      console.log(responseData);
      this.atendimentoDetails = responseData;
    })
  }
}
