import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders({ Authorization: localStorage.getItem('cmail-token') });

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }): Observable<any> {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    };

    return this.http
      .post(this.api, emailParaApi, { headers: this.cabecalho })
      .pipe<Email>(
        map(
          (emailApi: any) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content
            });
          }
        )
      );
  }
}
