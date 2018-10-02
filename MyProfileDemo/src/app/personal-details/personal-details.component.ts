import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  firstName: string = 'Manish';
  lastName: string = 'Dubey';
  dateOfBirth: string = "07/10/1986";
  gender: string = 'Male'; 

  constructor() { }

  ngOnInit() {
  }

}
