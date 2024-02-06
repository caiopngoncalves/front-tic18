import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrl: './barra-de-busca.component.css'
})
export class BarraDeBuscaComponent {
  @Output() SearchDone = new EventEmitter<string>();
  Search = "";

  getSearch(){
    this.Search = (<HTMLInputElement>document.getElementById("txtSearch"))!.value || "";
    this.shearch();
  }

  shearch(){
    this.SearchDone.emit(this.Search);
  }

}
