import { Router, CanLoad, Route } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,   
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      console.log('AuthGuard');
      return this.verificarAcesso();
    }
    
  private verificarAcesso(){
     // Se o usuário estiver autenticado, libera a rota
     if (this.authService.usuariEstaAutenticado()){
       return true;
     }    
     this.router.navigate(['/login']);
     return false; 
   }

	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('Verificando se o usuário pode carregar o módulo');
    return this.verificarAcesso();
  }
  }