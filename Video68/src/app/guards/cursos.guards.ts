import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Promise } from "@types/q";

@Injectable()
export class CursosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,    
        state: RouterStateSnapshot):
        Observable<boolean>|Promise<boolean>|boolean{
            console.log('guarda de rota filha');        
            return true;
        }
}  


