
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core/src/metadata";
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [        
    { path: '', component: HomeComponent },    
    { path: 'login', component: LoginComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
})
export class AppRoutingModule{
}