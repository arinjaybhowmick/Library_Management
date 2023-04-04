import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title="Books";
  books : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchBooks()
    this.countBooks()
  }

  addBooks(){
    console.log("add books button clicked")
    this.router.navigateByUrl('/book-add')
  }

  fetchBooks(){

    this.http.get("http://localhost:8080/book/allbooks")
    .subscribe(resp =>{
      this.books = resp;
      console.log('Books retrieved successfully', this.books)
    }, error => {
      console.error('Error retrieving books', error);
    });

  }

  countBooks(){

    this.http.get("http://localhost:8080/book/bookcount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Books count successfully', this.count)
    }, error => {
      console.error('Error count books', error);
    });

  }

  deleteBook(bookId : number){
    console.log(bookId)
    const url = 'http://localhost:8080/book/deletebook/' + bookId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Book deleted successfully');
      this.fetchBooks()
      this.countBooks()
    }, error => {
      console.error('Error deleting book', error);
    });
  }

}
