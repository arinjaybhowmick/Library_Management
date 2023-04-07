import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {

  studentsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.studentsForm = this.formbuilder.group({
      name : ['',Validators.required],
      department : ['',Validators.required],
      rollNumber : ['',Validators.required],
      birthDate : [],
      mobileNumber : []
    })
  }

  ngOnInit(): void {
  }

  saveStudent(){

    let studentData = this.studentsForm.value;

    this.http.post('http://localhost:8080/student/savestudent',studentData)
    .subscribe(response => {
      console.log('Student saved', response)
      this.router.navigateByUrl('/student')
    }, error =>{
      console.error("Error in student save", error)
    }
    );


  }

}
