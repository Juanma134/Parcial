import { Component, OnInit } from '@angular/core';
import { Users } from '../../moduls/user';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.component.html',
  styleUrls: ['./parcial.component.scss']
})
export class ParcialComponent implements OnInit {

  lista: Users[]=[]

  constructor(private _servicio: UsuarioService) { }

  ngOnInit(): void {
    this._servicio.usuarioServicio().subscribe(
      req =>{
        this.lista= req
      },
      err =>{
        var mensaje = err.error();
        console.log(mensaje);
      }
    )
  }

}
