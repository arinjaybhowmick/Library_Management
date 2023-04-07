import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title="Authors";
  authors : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAuthors()
    this.countAuthors()
  }

  addAuthors(){
    console.log("add authors button clicked")
    this.router.navigateByUrl('/author-add')
  }

  
  updateAuthor(authorId : number){
    console.log("update author button clicked ")
    this.router.navigate(['/author-update',authorId])
  }

  fetchAuthors(){

    this.http.get("http://localhost:8080/author/allauthors")
    .subscribe(resp =>{
      this.authors = resp;
      console.log('Authors retrieved successfully', this.authors)
    }, error => {
      console.error('Error retrieving authors', error);
    });

  }

  countAuthors(){

    this.http.get("http://localhost:8080/author/authorcount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Authors count successfully', this.count)
    }, error => {
      console.error('Error count authors', error);
    });

  }

  deleteAuthor(authorId : number){
    console.log(authorId)
    const url = 'http://localhost:8080/author/deleteauthor/' + authorId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Author deleted successfully');
      this.fetchAuthors()
      this.countAuthors()
    }, error => {
      console.error('Error deleting author', error);
    });
  }
}
