
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Promise } from "@types/q";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,    
        state: RouterStateSnapshot):
        Observable<boolean>|boolean{
            console.log(route);        
            console.log(state);    

            if(state.url.includes('editar')){
                //alert('Usuário sem acesso');
                //return false;
            }
            return true;
        }
}  


