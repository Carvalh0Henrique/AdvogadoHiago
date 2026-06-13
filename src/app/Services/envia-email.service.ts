import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviaEmailService {

  private apiUrl = 'http://localhost:3000/contato'; // URL do backend Node.js

  constructor(private http: HttpClient) { }

  enviarMensagem(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}