import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos-edit',
  templateUrl: './cargos-edit.component.html',
  styleUrls: ['./cargos-edit.component.css']
})
export class CargosEditComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  cargo = {
    apellidos: "", 
    nombres: "", 
    sueldo_base: 0 
  }
  myToken = "as4d7f85asdf48a6sdf";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + this.myToken
  });

  ngOnInit(): void {
  }

  save(): void {
    this.http.post("http://api/personal", this.cargo, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }
}
