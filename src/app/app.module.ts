import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing. module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // CaixaDeEntradaComponent,
    // LoginComponent,
    // CadastroComponent,
    // CmailFormGroupComponent,
    // CmailFormFieldDirective,
    // CmailMensagemErroComponent,
    // CmailMsgErroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ModuloRoteamento,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CadastroModule,
    // CaixaDeEntradaModule,
    // LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

