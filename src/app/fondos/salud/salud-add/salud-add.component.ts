import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud-add',
  templateUrl: './salud-add.component.html',
  styleUrls: ['./salud-add.component.css']
})
export class SaludAddComponent implements OnInit {

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
