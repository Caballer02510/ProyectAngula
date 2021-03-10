import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servicios/admin.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  estiloActivo: string = "active text-dark sombra"
  fnLogged = this.servicioUsuario.isLogged
  fnAdmin = this.servicioAdmin.isAdmin
  constructor(private servicioUsuario:UserService, private irHacia:Router, private servicioAdmin: AdminService) { }

  ngOnInit(): void {
  }
  doLogout(): void{
    this.servicioUsuario.logOut()
    this.irHacia.navigate(['/login'])
  }

}
