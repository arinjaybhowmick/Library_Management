import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html',
  styleUrls: ['./authorupdate.component.css']
})
export class AuthorupdateComponent implements OnInit {

  authorsForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const authorId = Number(params.get('id'));
      this.getAuthor(authorId)
    })

    this.authorsForm = this.formbuilder.group({
      id : [,Validators.required],
      name : ['',Validators.required],
      birthDate : [],
      nationality : ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  getAuthor(authorId : number){

    type Author = { 
      id: number, name: string, 
      birthDate: String, nationality: String };

    const url = 'http://localhost:8080/author/authorbyid/' + authorId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Author = resp as Author;
      console.log('Author found successfully')
      this.authorsForm.patchValue({
        id: result.id, name: result.name,
        birthDate: result.birthDate, nationality: result.nationality })
    }, error => {
      console.error('Error getting author', error);
    });

  }

  updateAuthor(){

    let authorData = this.authorsForm.value;

    this.http.put('http://localhost:8080/author/updateauthor',authorData)
    .subscribe(response => {
      console.log('Author updated', response)
      this.router.navigateByUrl('/author')
    }, error =>{
      console.error("Error in author update", error)
    }
    );

  }
}