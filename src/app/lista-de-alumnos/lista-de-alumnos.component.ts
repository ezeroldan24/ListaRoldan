import { Component } from '@angular/core';

interface Alumno {
  nombre: string,
  fechaInscripcion:Date,
  edad: number
}

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent {

activar:boolean = true;
numero: number = 1;
 alumnos : Alumno[] = [
  {
    nombre: "Ezequiel",
    fechaInscripcion : new Date(),
    edad : 25
  },
  {
    nombre: "Micaela",
    fechaInscripcion : new Date(),
    edad : 30
  },
  {
    nombre: "Elina",
    fechaInscripcion : new Date(),
    edad : 20
  },
  {
    nombre: "Nicolas",
    fechaInscripcion : new Date(),
    edad : 20
  },
  {
    nombre: "Matias",
    fechaInscripcion : new Date(),
    edad : 45
  },
  {
    nombre: "Esteban",
    fechaInscripcion : new Date(),
    edad : 45
  }



 ]
}
