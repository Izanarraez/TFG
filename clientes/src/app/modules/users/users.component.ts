import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  constructor(private UsuariosService : UsuariosService, private token: TokenService){}

  usuario : any;
  a : any;

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(){
    this.usuario = this.UsuariosService.getUsuarios().
    subscribe(
      datos => {
        this.usuario = datos
        console.log(this.usuario);
      }
    );
    
  }

  ascendUsuarios(id : any,name: any,email: any,password: any, photo: any){
    var usuario = {
      name: name,
      email: email,
      type_user: 'admin',
      password: password,
      photo: photo
    }
    this.UsuariosService.ascendUsuarios(id,usuario).subscribe(res => {
        this.loadUsuarios();
    });
  }

  deleteUsuarios(id : any){
    this.UsuariosService.deleteUsuario(id).subscribe(datos => {
      console.log('borrado')
      this.loadUsuarios();
    })
  }
}
