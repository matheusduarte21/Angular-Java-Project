import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // URL DA API
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //método para selecionar todos os clientes
  selecionar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url); //O Http faz um requição GET, dentro do <falamos que vamos receber um array de clientes na url da API>
  }

  //Método para cadastrar clientes
  cadastrar(obj: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj); // (this.url, obj) nessa parte fizemos um POST no APi. com o obj cliente
  }

  //método para editar cliente
  editar(obj: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.url, obj);
  }

  remover(codigo: number): Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo)
  }
}
