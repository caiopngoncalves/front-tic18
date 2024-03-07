import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Atendimento } from '../atendimento.model';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements OnInit {
  
  loadedAtendimentos: Atendimento[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  addAtendimento(atendimentoData: {
    nomeTutor: string;
    email: string;
    telefone: string;
    nomeAnimal: string;
    especieAnimal: string;
    racaAnimal: string;
    descricaoAtendimento: string;
  }) {
    this.http
      .post(
        'https://residencia-c6e44-default-rtdb.firebaseio.com/atendimento.json',
        atendimentoData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getAtendimentos() {

    return this.http
      .get<{ [key: string]: Atendimento }>(
        'https://residencia-c6e44-default-rtdb.firebaseio.com/atendimento.json',
        {
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Atendimento[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...(responseData as any)[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deleteAllAtendimento() {
    return this.http.delete(
      'https://residencia-c6e44-default-rtdb.firebaseio.com/atendimento.json'
    );
  }

  getAtendimento(id: string) {
    return this.http.get<Atendimento>(
      `https://residencia-c6e44-default-rtdb.firebaseio.com/atendimento/${id}.json`
    );
  }

  editarAtendimento(
    id: string,
    atendimentoData: {
      nomeTutor: string;
      email: string;
      telefone: string;
      nomeAnimal: string;
      especie: string;
      raca: string;
      descricao: string;
    }
  ) {
    return this.http.put(
      `https://residencia-c6e44-default-rtdb.firebaseio.com/${id}.json`,
      atendimentoData,
      { observe: 'response' }
    );
  }
}
