import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro: Routes = [
    { path: '', component: CadastroComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ]
})
export class CadastroRoutingModule { }
