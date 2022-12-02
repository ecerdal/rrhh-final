import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  personal = {
    apellidos: "", 
    nombres: "", 
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
    this.http.post("http://api/personal", this.personal, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }

}
