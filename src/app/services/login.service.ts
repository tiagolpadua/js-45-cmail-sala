import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginData } from '../models/ILoginData';
import { ITokenResponse } from '../models/ITokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(private http: HttpClient) { }

  logar(dadosLogin: ILoginData): Observable<any> {
    return this.http
      .post(this.api, dadosLogin)
      .pipe(
        map((response: ITokenResponse) => {
          localStorage.setItem('cmail-token', response.token);
          return response;
        })
      );
  }
}
