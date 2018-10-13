import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grade-evaluator',
  templateUrl: './grade-evaluator.component.html',
  styleUrls: ['./grade-evaluator.component.css']
})
export class GradeEvaluatorComponent implements OnInit {

  grade: string = '';

  @Input()
  percentage: number;

  @Output()
  EvaluateGrade = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.calculateGrade();
  }
  calculateGrade(): void {
    console.log('here in GradeEvaluator' + this.percentage);
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
    this.EvaluateGrade.emit(this.grade);
  }

}
