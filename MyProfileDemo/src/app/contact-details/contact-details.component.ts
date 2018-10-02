import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
    this.contact.email = "mksdubeyjob@gmail.com";
    this.contact.mobileno = "9702543007";
  }

}
