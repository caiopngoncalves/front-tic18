import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarrinhoService, Item } from '../services/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-produtos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./produtos.component.html",
  styleUrl: "./produtos.component.css",
})
export class ProdutosComponent {
  @ViewChild("confirmacao", { static: false }) confirmacaoElement:
    | ElementRef
    | undefined;
  produtoAdicionado: string = "";
  produtos: Item[];

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos = this.gerarProdutos();
  }

  adicionarAoCarrinho(produto: Item) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

  gerarProdutos() : Item[] {
    return [
      {
        id: 1,
        name: "Caneta Eferográfica",
        price: 2.99,
        quantity: 1,
        imgURL: "assets/caneta.jpeg",
          
      },
      {
        id: 2,
        name: "Caderno capa dura",
        price: 15.99,
        quantity: 1,
        imgURL:
          "assets/caderno.jpeg",
      },
      {
        id: 3,
        name: "Livro Compiladores",
        price: 105.89,
        quantity: 1,
        imgURL:
          "assets/compiladores.jpg",
      },
      {
        id: 4,
        name: "Teclado para computador",
        price: 40.99,
        quantity: 1,
        imgURL:
          "assets/teclado.jpg",
      },
      {
        id: 5,
        name: "Mousepad",
        price: 15.99,
        quantity: 1,
        imgURL:
          "assets/mousepad.jpeg",
      },
      {
        id: 6,
        name: "Borracha Faber Castell",
        price: 5.99,
        quantity: 1,
        imgURL:
          "assets/borracha.jpg",
      },
      {
        id: 7,
        name: "Tesoura multiuso",
        price: 15.99,
        quantity: 1,
        imgURL:
          "assets/tesoura.jpeg",
      },
      {
        id: 8,
        name: "Estojo escolar",
        price: 124.98,
        quantity: 1,
        imgURL:
          "assets/estojo.jpeg",
      },
      {
        id: 9,
        name: "Mouse",
        price: 22.99,
        quantity: 1,
        imgURL:
          "assets/mouse.jpeg",
      },
      {
        id: 10,
        name: "Fone",
        price: 35.99,
        quantity: 1,
        imgURL:
          "assets/fone.jpeg",
      },
      {
        id: 11,
        name: "Lapiseira",
        price: 10.99,
        quantity: 1,
        imgURL:
          "assets/lapiseira.jpeg",
      },
      {
        id: 12,
        name: "Cadeira de escritório",
        price: 199.99,
        quantity: 1,
        imgURL:
          "assets/cadeira.jpeg",
      },
    ];
  }
}
