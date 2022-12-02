import { Component, OnInit } from '@angular/core';
import { Personals } from '../IPersonals';

@Component({
  selector: 'app-personal-admin',
  templateUrl: './personal-admin.component.html',
  styleUrls: ['./personal-admin.component.css']
})
export class PersonalAdminComponent implements OnInit {

  constructor() { }

  personals: Personals[] = []

  ngOnInit(): void {
    this.personals = JSON.parse(sessionStorage.getItem("personal") as string);
  }

}
