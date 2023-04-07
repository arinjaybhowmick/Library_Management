import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent implements OnInit {

  adminsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const adminId = Number(params.get('id'));
      this.getAdmin(adminId)
    })

    this.adminsForm = this.formbuilder.group({
      id : [,Validators.required],
      name : ['',Validators.required],
      username : ['',Validators.required],
      password : ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  getAdmin(adminId : number){

    type Admin = { 
      id: number, name: string, 
      username: String, password: String };

    const url = 'http://localhost:8080/admin/adminbyid/' + adminId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Admin = resp as Admin;
      console.log('Admin found successfully')
      this.adminsForm.patchValue({
        id: result.id, name: result.name, 
        username: result.username, password: result.password })
    }, error => {
      console.error('Error getting admin', error);
    });

  }

  updateAdmin(){

    let adminData = this.adminsForm.value;

    this.http.put('http://localhost:8080/admin/updateadmin',adminData)
    .subscribe(response => {
      console.log('Admin updated', response)
      this.router.navigateByUrl('/admin')
    }, error =>{
      console.error("Error in admin update", error)
    }
    );

  }
}