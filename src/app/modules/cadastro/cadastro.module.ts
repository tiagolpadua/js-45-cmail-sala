import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroComponent } from './cadastro.component';
@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedComponentModule
    ]
})
export class CadastroModule { }
