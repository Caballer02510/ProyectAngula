import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin= this.fb.group({
    password:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]]
  })
  mensaje: string=''
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
      if (this.servicioUsuario.isLogged()){
        this.irHacia.navigate(['/perfil'])
      }
  }
  submit(): void{
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.mensaje=error.error.error
      }
    )
  }
}

// <link rel="stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity = "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin = "anonymous" />
