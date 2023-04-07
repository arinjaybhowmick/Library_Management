import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {

  studentsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const studentId = Number(params.get('id'));
      this.getStudent(studentId)
    })

    this.studentsForm = this.formbuilder.group({
      id : [,Validators.required],
      name : ['',Validators.required],
      department : ['',Validators.required],
      rollNumber : ['',Validators.required],
      birthDate : [],
      mobileNumber : []
    })

  }

  ngOnInit(): void {
  }

  getStudent(studentId : number){

    type Student = { 
      id: number, name: string, department: String, 
      rollNumber: String, birthDate: String, 
      mobileNumber: String };

    const url = 'http://localhost:8080/student/studentbyid/' + studentId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Student = resp as Student;
      console.log('Student found successfully')
      this.studentsForm.patchValue({
        id: result.id, name: result.name, department: result.department, 
        rollNumber: result.rollNumber, birthDate: result.birthDate, 
        mobileNumber: result.mobileNumber })
    }, error => {
      console.error('Error getting student', error);
    });

  }

  updateStudent(){

    let studentData = this.studentsForm.value;

    this.http.put('http://localhost:8080/student/updatestudent',studentData)
    .subscribe(response => {
      console.log('Student updated', response)
      this.router.navigateByUrl('/student')
    }, error =>{
      console.error("Error in student update", error)
    }
    );

  }
}