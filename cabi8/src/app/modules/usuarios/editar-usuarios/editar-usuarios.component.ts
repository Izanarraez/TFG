import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit{

  id! :number;
  nombre!:string;
  correo!:string;
  contrase!:string;
  tipo_usuarios!: number;
  foto!:string | null;

  usuario !: Usuario;

  Usua: Usuario = {id: 0, nombre: this.nombre, correo: this.correo, tipo_usuario: this.tipo_usuarios, contraseña: this.contrase, foto: this.foto};

  constructor(private UsuariosService : UsuariosService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['idUsuario'];
      this.UsuariosService.findUsuario(this.id).subscribe((datos: Usuario) => this.usuario = datos);
  }

  submit(){
    this.UsuariosService.updateUsuario(this.id, this.usuario).subscribe(res => {
         console.log('Person updated successfully!');
         this.router.navigateByUrl('usuarios');
    })
  }
}
