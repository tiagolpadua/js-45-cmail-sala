import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailMsgErroComponent } from './cmail-msg-erro/cmail-msg-erro.component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [HeaderComponent, CmailFormGroupComponent, CmailMsgErroComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, CmailFormGroupComponent, CmailMsgErroComponent]
})
export class SharedComponentModule { }
