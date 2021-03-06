import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate, CanLoad {
  private roles: string[] = [];

  constructor(
    private tokenStorageService: TokenStorageService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.tokenStorageService.getToken()) {
        window.location.replace('/');
        return false;
      } else {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          return true;
        } else {
          window.location.replace('/');
          return false;
        }
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
