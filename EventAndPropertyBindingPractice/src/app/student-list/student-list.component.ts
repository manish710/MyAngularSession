import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  txtrollno: number;
  txtname: string;

  selectedStudent: Student = new Student();
  NewlyAddedStudent: Student = new Student();

studentList: Student[] = [
  {
   "rollno":32,
   "name":"Manish"
  },
  {
    "rollno": 26,
    "name": "Danish"
   },
   {
    "rollno": 44,
    "name": "Vinit"
   }
]; 

  ngOnInit() {
    this.NewlyAddedStudent.rollno = 0;
    this.NewlyAddedStudent.name = '';
  }

  setSelectedStudent(student:Student):void {
    console.log(student);
    this.selectedStudent = student;

  }

}
