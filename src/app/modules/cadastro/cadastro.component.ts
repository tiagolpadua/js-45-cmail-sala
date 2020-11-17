import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  mensagensErro: IMensagemErro[];

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    // telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}[0-9]?-[0-9]{4}')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  });

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit(): void {
  }

  validaImagem(campoDoFormulario: FormControl): Observable<any> {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true };
        }),
        catchError((error) => {
          return [{ urlInvalida: true }];
        })
      );
  }

  handleCadastrarUsuario(): void {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);
      this.httpClient
        .post('http://localhost:3200/users', userData)
        .subscribe(
          () => {
            console.log(`Cadastrado com sucesso`);
            this.formCadastro.reset();

            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000);
          }
          , (responseError: HttpErrorResponse) => {
            // resposta caso existam erros!
            if (responseError.error.body) {
              this.mensagensErro = responseError.error.body;
            } else {
              this.mensagensErro = [{ message: 'Erro desconhecido...' }];
            }
            // this.mensagensErro = responseError.error.body ? responseError.error.body : [{ message: 'Erro desconhecido...' }];
          }
        );
    }
    else {
      this.formCadastro.markAllAsTouched();
    }
  }
}

interface IMensagemErro {
  message: string;
  value?: string;
}
