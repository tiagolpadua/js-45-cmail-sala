import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, SharedComponentModule, LoginRoutingModule]
})
export class LoginModule { }
