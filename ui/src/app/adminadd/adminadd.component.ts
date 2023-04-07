import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {

  adminsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.adminsForm = this.formbuilder.group({
      name : ['',Validators.required],
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveAdmin(){

    let adminData = this.adminsForm.value;

    this.http.post('http://localhost:8080/admin/saveadmin',adminData)
    .subscribe(response => {
      console.log('Admin saved', response)
      this.router.navigateByUrl('/admin')
    }, error =>{
      console.error("Error in admin save", error)
    }
    );


  }

}
