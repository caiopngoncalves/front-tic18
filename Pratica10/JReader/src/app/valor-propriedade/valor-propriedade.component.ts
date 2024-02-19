import { Component } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrls: ['./valor-propriedade.component.css']
})
export class ValorPropriedadeComponent {
  valor: any;

  constructor(private comunicacaoService: ComunicacaoService) {

  }
  ngOnInit() {
    this.comunicacaoService.propriedadeSelecionada$.subscribe((propiedade) => {
      this.valor = propiedade;
    });
  }
}