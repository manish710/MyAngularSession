import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure-message',
  templateUrl: './failure-message.component.html',
  styleUrls: ['./failure-message.component.css']
})
export class FailureMessageComponent implements OnInit {

  failuremsg: string = "Failed to load the required file..."

  constructor() { }

  ngOnInit() {
  }

}
