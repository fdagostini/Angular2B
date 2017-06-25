import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { EventEmitter } from "events";

@Injectable()
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarmenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  // Método para autentificar o usuário:
  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.mostrarmenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else{
      this.usuarioAutenticado = false;
      this.mostrarmenuEmitter.emit(false);
    }
   
  }

}
