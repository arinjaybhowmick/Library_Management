import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  booksForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.booksForm = this.formbuilder.group({
      title : ['',Validators.required],
      author : ['',Validators.required],
      isbn : ['',Validators.required],
      publicationDate : [],
      publisher : ['',Validators.required],
      copies : [,Validators.required],
      category : [],
      genre : [],
      subgenre : []
    })
  }

  ngOnInit(): void {
  }

  saveBook(){

    let bookData = this.booksForm.value;

    this.http.post('http://localhost:8080/book/savebook',bookData)
    .subscribe(response => {
      console.log('Book saved', response)
      this.router.navigateByUrl('/book')
    }, error =>{
      console.error("Error in book save", error)
    }
    );


  }

}
