import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuarios/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit{
  
  /*usuario: Usuario[] = [];

  currentUsuario: Usuario = { id: 0, nombre: '', correo: '', tipo_usuario: 1, foto: ''};
  isEditMode = false;

  constructor(private usuarios_services: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarios_services.getUsuarios()
      .subscribe(usuarios => this.usuario = usuarios);
  }

  saveUsuario(): void {
    if (this.isEditMode) {
      this.updateUsuario();
    } else {
      this.createUsuario();
    }
  }

  createUsuario(): void {
    this.usuarios_services.createUsuario(this.currentUsuario)
      .subscribe(us => {
        this.usuario.push(us);
        this.currentUsuario = { id: 0, nombre: '', correo: '', tipo_usuario: 1, foto: ''};
      });
  }

  updateUsuario(): void {
    if (this.currentUsuario.id) {
      this.usuarios_services.updateUsuario(this.currentUsuario.id, this.currentUsuario)
        .subscribe(() => {
          const index = this.usuario.findIndex(us => us.id === this.currentUsuario.id);
          if (index !== -1) {
            this.usuario[index] = this.currentUsuario;
          }
          this.currentUsuario = { id: 0, nombre: '', correo: '', tipo_usuario: 1, foto: ''};
          this.isEditMode = false;
        });
    }
  }

  editUsuario(usuario: Usuario): void {
    this.currentUsuario = { ...usuario };
    this.isEditMode = true;
  }

  deleteUsuario(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.usuarios_services.deleteUsuario(id)
        .subscribe(() => {
          this.usuario = this.usuario.filter(us => us.id !== id);
        });
    }
  }*/

  constructor(private UsuariosService : UsuariosService){}

  usuario : Usuario[] = [];

  ngOnInit(): void {
    this.UsuariosService.getUsuarios().subscribe((data: Usuario[])=>{
      this.usuario = data;
      console.log(this.usuario);
    })
  }

  deleteUsuarios(id : any){
    this.UsuariosService.deleteUsuario(id).subscribe(res => {
         this.usuario = this.usuario.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }
}
