import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /*usuarios = {
    name: null,
    email: null,
    type_user: 'user',
    password: null,
    photo: null
  };*/

  form : any;

  constructor(private UsuariosService : UsuariosService, private router: Router, private fb : FormBuilder){}

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  
      new FormControl(''.toLowerCase(), [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl(''.toLowerCase(), [ Validators.required, Validators.email ]),
      type_user: new FormControl('user'),
      password: new FormControl(''.toLowerCase(), [ Validators.required, Validators.pattern('[0-9]')]),
      photo: new FormControl('')
    });
  }

  public error: any = [];

  registrarUsuario() {

    console.log(this.form.value);
    return this.UsuariosService.saveUsuario(this.form.value).subscribe(
    datos => {
      console.log(datos)
      this.router.navigateByUrl('login')
    },
    error => this.handleError(error));

  }

  handleError(error:any){
    this.error = error.error.error;
  }

  valido(){
    if(this.form.name && this.form.email.valid && this.form.password.valid){
      return true;
    }
    else{
      return false;
    }
  }

} 
