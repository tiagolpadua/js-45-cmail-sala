import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
    },
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inbox'
    },
    {
        path: '**',
        redirectTo: 'cadastro',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        // Importou e leu rotas ⤵
        RouterModule.forRoot(rotas)
    ],
    // Exportou módulo configurado
    exports: [RouterModule]
})
export class AppRoutingModule { }
