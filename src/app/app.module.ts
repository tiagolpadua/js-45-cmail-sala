import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

