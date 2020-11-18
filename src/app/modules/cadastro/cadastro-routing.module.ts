import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'tela1', component: CadastroComponent },
    { path: 'tela2', component: CadastroComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroRoutingModule { }
