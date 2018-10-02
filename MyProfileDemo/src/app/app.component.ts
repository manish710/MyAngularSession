import { Component } from '@angular/core';
import { Skill } from './skill-list/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Profile Demo';

  CalculateGrade(marks: number, outof: number): void {
    let per : number = (marks/outof)*100;

    if (per > 80) {
      console.log("A+");
    } else if (per > 70 && per < 80){
      console.log("A");
    } else if (per > 60 && per < 70){
      console.log("B");
    } else if (per > 50 && per < 60){
      console.log("C");
    } else if (per > 35 && per < 50){
      console.log("D");
    }

  }
}
