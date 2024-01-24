import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculo: any;
  @Output() propiedadeSelecionada = new EventEmitter<string>();

  getPropriedades(veiculo: any){
    this.propiedadeSelecionada.emit(veiculo);
  }
}