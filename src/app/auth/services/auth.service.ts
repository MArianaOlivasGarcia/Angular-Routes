import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';


const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
               private router: Router,
               private ngZone: NgZone ) { 
    this.googleInit();
  }

  public auth2: any;
  public user: User | undefined;


  validateToken() {

    const accessToken = localStorage.getItem('accessToken') || ''

    return this.http.get(`${ base_url}/auth/renew`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      } 
    }).pipe(
      tap( (v: any) => {
        localStorage.setItem('accessToken', v.accessToken)
        localStorage.setItem('menu', JSON.stringify(v.menu))

        const { 
          name,
          lastname,
          role,
          email,
          isGoogle,
          image,
          isOnline,
          id } = v.user;

        this.user = new User( 
          name,
          role,
          email,
          isGoogle,
          image,
          isOnline,
          lastname,
          id );
        
          console.log(this.user);
      }),
      map( v => true ),
      catchError( e => of(false) )

    )
  }


  login( formData: LoginForm ) {
    return this.http.post(`${ base_url}/auth/login`, formData )
        .pipe(
          tap( (v: any) => {
            localStorage.setItem('accessToken', v.accessToken)
          })
        )
  }


  google( token: string ) {
    return this.http.post(`${ base_url}/auth/google`, { token } )
        .pipe(
          tap( (v: any) => {
            localStorage.setItem('accessToken', v.accessToken)
          })
        )
  }


  register( formData: RegisterForm ) {
    return this.http.post(`${ base_url}/auth/register`, formData )
  }


  logout(){

    localStorage.removeItem('accessToken')
    localStorage.removeItem('menu')
    
    this.auth2.signOut().then(() => {

      this.ngZone.run( () => {
        this.router.navigateByUrl('/')
      })

    });

  }


  googleInit(): Promise<void> {

    return new Promise( resolve => {
      
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '855212464867-dbmnlv1mtfm7ratcr00h7lk706027u30.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });

    })
    
  }


}
