import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "JReader"
  data: any[] = []
  categorias: string[] = [];
  veiculosSelecionados: any[] = [];
  veiculoSelecionado: { nome: string, valor: any }[] = [];
  veiculos: any[] = [];
  propriedades: string[] = [];
  valorPropriedade: any;
  carrinho: any = [];
  veiculoUnformated: any; 

  selecionarArquivo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', (event) => this.lerArquivo(event));
    input.click();
  }

  lerArquivo(event: any) {
    const arquivo = event.target.files[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onload = () => {
        const conteudo = leitor.result as string;

        this.processarConteudoJSON(conteudo);
      };
      leitor.readAsText(arquivo);
    }
  }
  
    processarConteudoJSON(conteudo: string) {
      this.data = JSON.parse(conteudo);
      this.categorias = Object.keys(this.data);
      console.log('Categorias carregadas:', this.categorias);
    }

  onCategoriaSelecionada(categoria: string) {

    console.log('Categoria selecionada:', categoria);
    // if (this.categorias.hasOwnProperty(categoria)) {

      const veiculosDaCategoria = this.data[categoria as any];
      this.veiculosSelecionados = veiculosDaCategoria;

      console.log(`Veículos da categoria ${categoria}:`, veiculosDaCategoria);
    // }
  }

  onVeiculoSelecionado(veiculo: any) {

    this.veiculoUnformated = veiculo;

    this.veiculoSelecionado = this.extrairPropriedades(veiculo);
    console.log('Veiculo selecionado:', this.veiculoSelecionado);

    // if (this.categorias.hasOwnProperty(categoria)) {

    // }
  }

  extrairPropriedades(objeto: any): { nome: string, valor: any }[] {
    const propriedades: { nome: string, valor: any }[] = [];
  
    for (const propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        propriedades.push({
          nome: propriedade,
          valor: objeto[propriedade]
        });
      }
    }
  
    return propriedades;
  }

   onPropriedadeSelecionada(propriedade: any) {

    this.valorPropriedade = propriedade;
  } 
  adicionarAoCarrinho() {
    // Adiciona o veículo selecionado à lista de carrinho
    console.log(this.veiculoUnformated)
    this.carrinho.push(this.veiculoUnformated);
  }
}
