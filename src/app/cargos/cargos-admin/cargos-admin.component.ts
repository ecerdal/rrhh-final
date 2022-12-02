import { Component, OnInit } from '@angular/core';
import { Cargos } from '../ICargos';

@Component({
  selector: 'app-cargos-admin',
  templateUrl: './cargos-admin.component.html',
  styleUrls: ['./cargos-admin.component.css']
})
export class CargosAdminComponent implements OnInit {

  constructor() { }

  /* personal = [
    {"apellidos": "Perez Garcia", "nombres": "Fresia del Carmen", "fecha_nacimiento": ""},
    {"apellidos": "Aldunate Cortes", "nombres": "Ignacio Fabian", "fecha_nacimiento": ""},
    {"apellidos": "Fernandez Ocaranza", "nombres": "Andrea Cecilia", "fecha_nacimiento": ""},
    {"apellidos": "Pineda Oyanadel", "nombres": "Pedro Alfonso", "fecha_nacimiento": ""},
  ] */
  cargos: Cargos[] = []

  ngOnInit(): void {
    this.cargos = JSON.parse(sessionStorage.getItem("cargos") as string);
  }

}
