import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  selectedStudent: Student = new Student();
  newStudent: Student = new Student();

studentList: Student[] = [
  {
   'rollno': 32,
   'name': 'Manish',
   'percent': 63.63,
   'grade': 'First'
  },
  {
    'rollno': 26,
    'name': 'Danish',
    'percent': 74.63,
    'grade': 'Dist'
   }
];

  ngOnInit() {
    // this.newStudent.rollno = 0;
    // this.newStudent.name = '';
  }

  setSelectedStudent(student: Student): void {
    console.log(student);
    this.selectedStudent = student;

  }

  AddStudent() {
    this.calculateGrade();
    this.studentList.push(Object.assign({}, this.newStudent));
    this.newStudent.rollno = 0;
    this.newStudent.name = '';
    this.newStudent.percent = 0;
  }

  calculateGrade(): any {
    if (this.newStudent.percent >= 70) {
      this.newStudent.grade = 'Dist';
    } else if (this.newStudent.percent >= 60) {
      this.newStudent.grade =  'First';
    } else if (this.newStudent.percent >= 50) {
      this.newStudent.grade =  'Second';
    } else if (this.newStudent.percent >= 40) {
      this.newStudent.grade =  'Pass';
    } else {
      this.newStudent.grade =  'Fail';
    }
  }

  getGrade(grade): void {
    console.log(grade);
  }

  // calculateGrade(): any {
  //   if (this.newStudent.percent >= 70) {
  //     return 'Dist';
  //   } else if (this.newStudent.percent >= 60) {
  //     return 'First';
  //   } else if (this.newStudent.percent >= 50) {
  //     return 'Second';
  //   } else if (this.newStudent.percent >= 40) {
  //     return 'Pass';
  //   } else {
  //     return 'Fail';
  //   }
  // }

}
