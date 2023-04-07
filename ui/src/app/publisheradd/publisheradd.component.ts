import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisheradd',
  templateUrl: './publisheradd.component.html',
  styleUrls: ['./publisheradd.component.css']
})
export class PublisheraddComponent implements OnInit {

  publishersForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.publishersForm = this.formbuilder.group({
      name : ['',Validators.required],
      address : [],
      phone : [],
      email : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  savePublisher(){

    let publisherData = this.publishersForm.value;

    this.http.post('http://localhost:8080/publisher/savepublisher',publisherData)
    .subscribe(response => {
      console.log('Publisher saved', response)
      this.router.navigateByUrl('/publisher')
    }, error =>{
      console.error("Error in publisher save", error)
    }
    );


  }

}
