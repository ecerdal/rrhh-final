import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personals } from '../IPersonals';

@Component({
  selector: 'app-personal-add',
  templateUrl: './personal-add.component.html',
  styleUrls: ['./personal-add.component.css']
})
export class PersonalAddComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  personal: Personals = {
    apellidos: "", 
    nombre: "", 
    fecha_nacimiento: "", 
    id_salud: 0, 
    id_prevision: 0, 
    id_cargo: 0, 
    cargas: 0, 
    id_tipo_contrato: 0, 
    hrs_laborales: 0
  }
  myToken = "as4d7f85asdf48a6sdf";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + this.myToken
  });

  ngOnInit(): void {
  }

  save(): void {
    let personals: Personals[] = JSON.parse(sessionStorage.getItem("personal") as string) || [];
    personals.push(this.personal);
    sessionStorage.setItem("personal", JSON.stringify(personals));
    this.route.navigate(["/personal"]);
  }

}
