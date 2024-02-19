import { Component, Input } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  veiculos: any[] = [];

  constructor(private comunicacaoService: ComunicacaoService) {}

  ngOnInit() {
    this.comunicacaoService.veiculos$.subscribe((veiculos) => {
      this.veiculos = veiculos;
    });
  }

  selecionarVeiculo(veiculo: any) {
    this.comunicacaoService.enviarVeiculo(veiculo);
  }
}
