import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit {

  booksForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const bookId = Number(params.get('id'));
      this.getBook(bookId)
    })

    this.booksForm = this.formbuilder.group({
      id : [,Validators.required],
      title : [,Validators.required],
      author : [,Validators.required],
      isbn : [,Validators.required],
      publicationDate : [],
      publisher : [,Validators.required],
      copies : [,Validators.required],
      category : [],
      genre : [],
      subgenre : []
    })

  }

  ngOnInit(): void {
  }

  getBook(bookId : number){

    type Book = { 
      id: number, title: string, author: String, 
      isbn: String, publicationDate: String, 
      publisher: String, copies: Number, 
      category: String, genre: String, subgenre: String };

    const url = 'http://localhost:8080/book/bookbyid/' + bookId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Book = resp as Book;
      console.log('Book found successfully')
      this.booksForm.patchValue({
        id: result.id, title: result.title, author: result.author, 
        isbn: result.isbn, publicationDate: result.publicationDate, 
        publisher: result.publisher, copies: result.copies, 
        category: result.category, genre: result.genre, subgenre: result.subgenre })
    }, error => {
      console.error('Error getting book', error);
    });

  }

  updateBook(){

    let bookData = this.booksForm.value;

    this.http.put('http://localhost:8080/book/updatebook',bookData)
    .subscribe(response => {
      console.log('Book updated', response)
      this.router.navigateByUrl('/book')
    }, error =>{
      console.error("Error in book update", error)
    }
    );

  }
}