import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { TokenService } from 'src/app/services/token/token.service';


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  constructor(private users : UsuariosService, private token: TokenService){}

  ngOnInit(): void {
    this.encontrar();
  }

  form = {
    name: null,
    email: null,
    password: null,
    type_user: null,
    photo: null
  };

  usu : any;

  getToken(){
    return this.token.get();
  }

  cambiar(){
    this.form.type_user = this.usu.type_user;
    this.users.updateUsuario(this.usu.id,this.form).subscribe(datos => {
      console.log('exito');  
    })
  }

  encontrar(){
    const decode = this.token.payload(this.getToken());
    this.usu = this.users.findUsuario(decode.sub).subscribe(
      datos => {
        this.usu = datos
      }
    );
  }

  onChanged(event: any){
    this.form.photo = event.target.files[0];
  }

}
