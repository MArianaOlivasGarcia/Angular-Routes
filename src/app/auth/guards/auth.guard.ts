import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | Observable<boolean>{

      return this.authService.validateToken()
        .pipe(
         tap( isAuthenticated => {
        
          if( !isAuthenticated ){
            this.router.navigateByUrl('/auth/login')
          }
          
         })
        );
  }

}
