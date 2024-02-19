import { Component, Input } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  veiculo: any;

  constructor(private comunicacaoService: ComunicacaoService) {}

  ngOnInit() {
    this.comunicacaoService.veiculoSelecionadoFormated$.subscribe((propiedades) => {
      this.veiculo = propiedades;
    });
  }
  getPropriedades(propiedade: any) {
    this.comunicacaoService.enviarPropriedadeSelecionada(propiedade);
  }
}