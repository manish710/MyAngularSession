import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skillList: Skill[] = [
    {
    "skillname" : "C#",
    "exp" : 8
  }
];

  constructor() { }

  ngOnInit() {
    let skill1 = new Skill();
    skill1.skillname = "Angular 2";
    skill1.exp = 2;

    let skill2 = new Skill();
    skill2.skillname = 'Big Data';
    skill2.exp = 3;

    let skill3 = new Skill();
    skill3.skillname = "SQL";
    skill3.exp = 6;

    this.skillList.push(skill1);
    this.skillList.push(skill2);
    this.skillList.push(skill3);
  }

}
