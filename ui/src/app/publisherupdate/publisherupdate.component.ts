import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publisherupdate',
  templateUrl: './publisherupdate.component.html',
  styleUrls: ['./publisherupdate.component.css']
})
export class PublisherupdateComponent implements OnInit {

  publishersForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const publisherId = Number(params.get('id'));
      this.getPublisher(publisherId)
    })

    this.publishersForm = this.formbuilder.group({
      id : [,Validators.required],
      name : ['',Validators.required],
      address : [],
      phone : [],
      email : ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  getPublisher(publisherId : number){

    type Publisher = { 
      id: number, name: string, address: String, 
      phone: String, email: String };

    const url = 'http://localhost:8080/publisher/publisherbyid/' + publisherId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Publisher = resp as Publisher;
      console.log('Publisher found successfully')
      this.publishersForm.patchValue({
        id: result.id, name: result.name, address: result.address, 
        phone: result.phone, email: result.email })
    }, error => {
      console.error('Error getting publisher', error);
    });

  }

  updatePublisher(){

    let publisherData = this.publishersForm.value;

    this.http.put('http://localhost:8080/publisher/updatepublisher',publisherData)
    .subscribe(response => {
      console.log('Publisher updated', response)
      this.router.navigateByUrl('/publisher')
    }, error =>{
      console.error("Error in publisher update", error)
    }
    );

  }
}