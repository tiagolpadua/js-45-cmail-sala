import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    // telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}[0-9]?-[0-9]{4}')]),
    avatar: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleCadastrarUsuario(): void {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    }
    else {
      this.formCadastro.markAllAsTouched();
    }
  }
}
