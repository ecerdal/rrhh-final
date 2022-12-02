import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensiones-add',
  templateUrl: './pensiones-add.component.html',
  styleUrls: ['./pensiones-add.component.css']
})
export class PensionesAddComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  pension = {
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
    this.http.post("http://api/personal", this.pension, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }

}
