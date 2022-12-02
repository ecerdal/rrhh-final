import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargos } from '../ICargos';

@Component({
  selector: 'app-cargos-add',
  templateUrl: './cargos-add.component.html',
  styleUrls: ['./cargos-add.component.css']
})
export class CargosAddComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  cargo: Cargos = {
    nombre: "", 
    descripcion: "", 
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
    /* this.http.post("http://api/personal", this.cargo, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    }); */
    let cargos: Cargos[] = JSON.parse(sessionStorage.getItem("cargos") as string) || [];
    cargos.push(this.cargo);
    sessionStorage.setItem("cargos", JSON.stringify(cargos));
    this.route.navigate(["/cargos"]);
  }

}
