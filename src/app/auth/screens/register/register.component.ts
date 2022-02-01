import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public registerForm = this.fb.group({
  //   name: ['', [ Validators.required ]],
  //   lastname: ['', [ Validators.required ]],
  //   email: ['', [ Validators.required, Validators.email ]],
  //   password: ['', [ Validators.required ]],
  //   confirmPassword: ['', [ Validators.required ]],
  //   terms: [false, [ Validators.required, Validators.requiredTrue ]],
  // },{
  //   Validators: this.passwordsEquals('password', 'confirmPassword')
  // });

  // public formSubmitted: boolean = false;

  // constructor( private fb: FormBuilder,
  //              private authService: AuthService,
  //              private router: Router ) { }

  ngOnInit(): void {
  }

  // campoInvalid( campo: string ): boolean{
  //   if ( !this.registerForm.get( campo )?.valid && this.formSubmitted ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // passwordsEquals( password: string, confirmPassword: string ) {

  //   return ( formGroup: AbstractControl ) => {
  //     const pass1 = formGroup.get(password)
  //     const pass2 = formGroup.get(confirmPassword)

  //     if ( pass1?.value === pass2?.value ) {
  //       pass2?.setErrors(null);
  //     } else {
  //       pass2?.setErrors({ notEquals: true })
  //     }

  //   }

  // }

  // register(){

  //   this.formSubmitted = true;
  //   if( this.registerForm.invalid ) return;

  //   this.authService.register( this.registerForm.value )
  //     .subscribe({
  //       next: (v) => this.router.navigateByUrl('/'),
  //       error: (e) => {
  //         Swal.fire({
  //           icon: 'error',
  //           text: e.error.message,
  //         })
  //       },
  //       complete: () => console.info('complete') 
  //   })

  // }


}
