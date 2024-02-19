import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacaoService {
  private dataSubject = new Subject<{ [key: string]: any }>();
  private classeSubject = new Subject<any[]>();
  private categoriaSubject = new Subject<string>();

  private veiculoSelecionadoUnformatedSubject = new Subject<any>();
  private veiculoSelecionadoFormatedSubject = new Subject<any>();
  private propriedadeSelecionadaSubject = new Subject<any>();
  private categoriasSubject = new Subject<string[]>();
  private veiculosSubject = new Subject<any[]>();

  data$ = this.dataSubject.asObservable();
  classe$ = this.classeSubject.asObservable();
  categoria$ = this.categoriaSubject.asObservable();
  veiculoSelecionadoUnformated$ = this.veiculoSelecionadoUnformatedSubject.asObservable();
  veiculoSelecionadoFormated$ = this.veiculoSelecionadoFormatedSubject.asObservable();
  propriedadeSelecionada$ = this.propriedadeSelecionadaSubject.asObservable();
  categorias$ = this.categoriasSubject.asObservable();
  veiculos$ = this.veiculosSubject.asObservable();
  
  selecionarData(data: []){
    this.dataSubject.next(data);
    console.log("data: ", data)
    let categorias = Object.keys(data);
    console.log("categorias: ", categorias)
    this.classeSubject.next(categorias);
  }

  enviarCategoriaSelecionada(categoria: string) {
    this.categoriaSubject.next(categoria);
/*     this.dataSubject.subscribe(data => {

      const veiculosDaCategoria = data[categoria];
      if (veiculosDaCategoria) {
        this.veiculosSubject.next(veiculosDaCategoria);
        console.log(`Veículos da categoria ${categoria}:`, veiculosDaCategoria);
      } else {
        console.log(`Categoria ${categoria} não encontrada`);
      }
    }); */
  }

  enviarVeiculosSelecionado(veiculos: any) {
    this.veiculosSubject.next(veiculos);

  }

  enviarPropriedadeSelecionada(propriedade: any) {
    this.propriedadeSelecionadaSubject.next(propriedade);
  }
  enviarVeiculo(veiculo: any[]) {
    this.veiculoSelecionadoUnformatedSubject.next(veiculo);

    this.veiculoSelecionadoFormatedSubject.next( this.extrairPropriedades(veiculo));
    console.log('Veiculo selecionado:', this.veiculoSelecionadoFormatedSubject);

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
}