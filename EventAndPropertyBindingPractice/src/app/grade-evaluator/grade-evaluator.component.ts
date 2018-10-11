import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-evaluator',
  templateUrl: './grade-evaluator.component.html',
  styleUrls: ['./grade-evaluator.component.css']
})
export class GradeEvaluatorComponent implements OnInit {

  grade = '';

  @Input()
  percentage: number;

  constructor() { }

  ngOnInit() {
  }
  calculateGrade(): void {
    if (this.percentage >= 70) {
      this.grade = 'Dist';
    } else if (this.percentage >= 60) {
      this.grade = 'First';
    } else if (this.percentage >= 50) {
      this.grade = 'Second';
    } else if (this.percentage >= 40) {
      this.grade = 'Pass';
    } else {
      this.grade = 'Fail';
    }
  }

}
