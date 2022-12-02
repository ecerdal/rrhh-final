import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud-edit',
  templateUrl: './salud-edit.component.html',
  styleUrls: ['./salud-edit.component.css']
})
export class SaludEditComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  salud = {
    apellidos: "", 
    nombres: "", 
    porcentaje: 0 
  }
  myToken = "as4d7f85asdf48a6sdf";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + this.myToken
  });

  ngOnInit(): void {
  }

  save(): void {
    this.http.post("http://api/personal", this.salud, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }

}
