import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {TdfformsComponent} from '../component/tdfforms/tdfforms.component'

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<TdfformsComponent> {
  
  canDeactivate(
    component: TdfformsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(!component.frmRef.form.valid){
      return window.confirm('There are unsaved changes.Do you really want to navigate?');
    }
    return true;
  }
}
