import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailMsgErroComponent } from './cmail-msg-erro/cmail-msg-erro.component';
import { RouterModule } from '@angular/router';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailMensagemErroComponent } from './cmail-mensagem-erro/cmail-mensagem-erro.component';
@NgModule({
    declarations: [
        HeaderComponent,
        CmailFormGroupComponent,
        CmailMsgErroComponent,
        CmailMensagemErroComponent,
        CmailFormFieldDirective
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        HeaderComponent,
        CmailFormGroupComponent,
        CmailMsgErroComponent,
        CmailMensagemErroComponent,
        CmailFormFieldDirective
    ]
})
export class SharedComponentModule { }
