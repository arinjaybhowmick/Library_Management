import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title="Students";
  students : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchStudents()
    this.countStudents()
  }

  addStudents(){
    console.log("add students button clicked")
    this.router.navigateByUrl('/student-add')
  }

  
  updateStudent(studentId : number){
    console.log("update student button clicked ")
    this.router.navigate(['/student-update',studentId])
  }

  fetchStudents(){

    this.http.get("http://localhost:8080/student/allstudents")
    .subscribe(resp =>{
      this.students = resp;
      console.log('Students retrieved successfully', this.students)
    }, error => {
      console.error('Error retrieving students', error);
    });

  }

  countStudents(){

    this.http.get("http://localhost:8080/student/studentcount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Students count successfully', this.count)
    }, error => {
      console.error('Error count students', error);
    });

  }

  deleteStudent(studentId : number){
    console.log(studentId)
    const url = 'http://localhost:8080/student/deletestudent/' + studentId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Student deleted successfully');
      this.fetchStudents()
      this.countStudents()
    }, error => {
      console.error('Error deleting student', error);
    });
  }
}
