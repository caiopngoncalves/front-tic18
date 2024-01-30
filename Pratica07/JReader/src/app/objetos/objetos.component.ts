import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  @Input() veiculos: any[] = [];
  @Output() veiculoSelecionado = new EventEmitter<string>();
  selecionarVeiculo(veiculo: any) {
    this.veiculoSelecionado.emit(veiculo);
  }
}