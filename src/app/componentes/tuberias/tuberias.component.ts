import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="regina marín cabrillana"
  mes: string = "ENERO"
  texto: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  fecha: Date = new Date()
  dinero: number =12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'en', 'entre']
  usuarios =[
    {nombre: "Regina", apellido: "Marín", edad: 17},
    {nombre: "Cristina", apellido: "García", edad: 32},
    {nombre: "Rodolfo", apellido: "Chiquiliquatre", edad: 41}
  ]
  dni: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
