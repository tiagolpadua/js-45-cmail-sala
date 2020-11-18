import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
@NgModule({
    declarations: [CaixaDeEntradaComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule
    ]
})
export class CaixaDeEntradaModule { }
