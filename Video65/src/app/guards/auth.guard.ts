import { Router } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    // Recebendo a rota
    route: ActivatedRouteSnapshot,
    // Recebendo o estado da rota
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      // Se o usuário estiver autenticado, libera a rota
      if (this.authService.usuariEstaAutenticado()){
        return true;
      } 
      // Senão traz a rota do login
      this.router.navigate(['/login']);
      return false; 
      }
  }