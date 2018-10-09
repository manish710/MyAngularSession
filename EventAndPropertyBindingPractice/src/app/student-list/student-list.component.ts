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
   "rollno":32,
   "name":"Manish",
   "percent":"63.63"
  },
  {
    "rollno": 26,
    "name": "Danish"
    "percent":"74.63"
   }
]; 

  ngOnInit() {
    //this.newStudent.rollno = 0;
    //this.newStudent.name = '';
  }

  setSelectedStudent(student:Student):void {
    console.log(student);
    this.selectedStudent = student;

  }

  AddStudent(){
    this.studentList.push(Object.assign({}, this.newStudent));
    this.newStudent.rollno = 0;
    this.newStudent.name = '';
  }

}
