import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginService } from 'src/app/services/login.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedComponentModule,
        LoginRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [LoginService]
})
export class LoginModule { }
