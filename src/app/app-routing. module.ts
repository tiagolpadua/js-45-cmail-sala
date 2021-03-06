import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const rotas: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule),
        canActivate: [AuthGuard],
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
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
