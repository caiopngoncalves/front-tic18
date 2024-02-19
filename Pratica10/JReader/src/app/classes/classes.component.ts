import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  categorias: string[] = [];
  data: { [key: string]: any } = [];

  constructor(private comunicacaoService: ComunicacaoService) {}

  ngOnInit() {
    this.comunicacaoService.data$.subscribe((data) => {
      this.data = data;
    });
    this.comunicacaoService.classe$.subscribe((classe) => {
      this.categorias = classe;
    });
    this.comunicacaoService.categoria$.subscribe((categoria) => {
      const veiculosDaCategoria = this.data[categoria];
      if (veiculosDaCategoria) {
        this.comunicacaoService.enviarVeiculosSelecionado(veiculosDaCategoria);
        console.log(`Veículos da categoria ${categoria}:`, veiculosDaCategoria);
      } else {
        console.log(`Categoria ${categoria} não encontrada`);
      }
    });
  }

  selecionarCategoria(categoria: string) {
    this.comunicacaoService.enviarCategoriaSelecionada(categoria);
  }
}
