import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title="Admins";
  admins : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAdmins()
    this.countAdmins()
  }

  addAdmins(){
    console.log("add admins button clicked")
    this.router.navigateByUrl('/admin-add')
  }

  
  updateAdmin(adminId : number){
    console.log("update admin button clicked ")
    this.router.navigate(['/admin-update',adminId])
  }

  fetchAdmins(){

    this.http.get("http://localhost:8080/admin/alladmins")
    .subscribe(resp =>{
      this.admins = resp;
      console.log('Admins retrieved successfully', this.admins)
    }, error => {
      console.error('Error retrieving admins', error);
    });

  }

  countAdmins(){

    this.http.get("http://localhost:8080/admin/admincount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Admins count successfully', this.count)
    }, error => {
      console.error('Error count admins', error);
    });

  }

  deleteAdmin(adminId : number){
    console.log(adminId)
    const url = 'http://localhost:8080/admin/deleteAdmin/' + adminId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('admin deleted successfully');
      this.fetchAdmins()
      this.countAdmins()
    }, error => {
      console.error('Error deleting admin', error);
    });
  }
}
