import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public loginForm = this.fb.group({
  //   email: [ localStorage.getItem('email') ||  '', [ Validators.required, Validators.email ]],
  //   password: ['', [ Validators.required ]],
  //   remember: [false],
  // });
  
  // public formSubmitted: boolean = false;
  // public auth2: any


  // constructor( private fb: FormBuilder,
  //              private authService: AuthService,
  //              private router: Router,
  //              private ngZone: NgZone ) { }

  ngOnInit(): void {

  //   // Renderizar el boton de google
  //   this.renderButton();

  }


  // campoInvalid( campo: string ): boolean{
  //   if ( !this.loginForm.get( campo )?.valid && this.formSubmitted ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
 
  // login() {

  //   this.formSubmitted = true;
  //   if( this.loginForm.invalid ) return;

  //   if ( this.loginForm.get('remember')?.value ) {
  //     localStorage.setItem('email', this.loginForm.get('email')?.value )
  //   } else {
  //     localStorage.removeItem('email')
  //   }

  //   this.authService.login( this.loginForm.value )
  //     .subscribe({
  //         next: (v) => this.router.navigateByUrl('/dashboard'),
  //         error: (e) => {
  //           Swal.fire({
  //             icon: 'error',
  //             text: e.error.message,
  //           })
  //         },
  //         complete: () => console.info('complete') 
  //     })

  // }


  // // onSuccess(googleUser: any) {
  // //   const token = googleUser.getAuthResponse().id_token;
  // //   console.log( token );
  // // }

  // // onFailure(error: any) {
  // //   console.log(error);
  // // }

  // renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     'scope': 'profile email',
  //     'width': 200,
  //     'height': 50,
  //     //'longtitle': true,
  //     //'theme': 'dark',
  //     // 'onsuccess': this.onSuccess,
  //     // 'onfailure': this.onFailure
  //   });

  //   this.startApp();
  // }


  // async startApp() {
  
  //     await this.authService.googleInit();
  //     this.auth2 = this.authService.auth2;
    
  //     this.attachSignin(document.getElementById('my-signin2'));
  // };


  // attachSignin(element: any) {
    
  //   this.auth2.attachClickHandler(element, {},
  //       (googleUser: any) => {
          
  //         const token = googleUser.getAuthResponse().id_token;
          
  //         this.authService.google( token )
  //           .subscribe( v => {
  //             this.ngZone.run( () => {
  //               this.router.navigateByUrl('/dashboard')
  //             })
  //           })

  //       }, (error: any) => {
  //         console.log(error);
  //       });
  // }

}
