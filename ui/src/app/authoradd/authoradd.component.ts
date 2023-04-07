import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoradd',
  templateUrl: './authoradd.component.html',
  styleUrls: ['./authoradd.component.css']
})
export class AuthoraddComponent implements OnInit {

  authorsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.authorsForm = this.formbuilder.group({
      name : ['',Validators.required],
      birthDate : [],
      nationality : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveAuthor(){

    let authorData = this.authorsForm.value;

    this.http.post('http://localhost:8080/author/saveauthor',authorData)
    .subscribe(response => {
      console.log('Author saved', response)
      this.router.navigateByUrl('/author')
    }, error =>{
      console.error("Error in author save", error)
    }
    );


  }

}
