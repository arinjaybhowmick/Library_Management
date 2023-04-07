import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanadd',
  templateUrl: './loanadd.component.html',
  styleUrls: ['./loanadd.component.css']
})
export class LoanaddComponent implements OnInit {

  loansForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { 
    this.loansForm = this.formbuilder.group({
      bookId : [,Validators.required],
      studentId : [,Validators.required],
      checkoutDate : ['',Validators.required],
      dueDate : ['',Validators.required],
      returnDate : []
    })
  }

  ngOnInit(): void {
  }

  saveLoan(){

    let loanData = this.loansForm.value;

    this.http.post('http://localhost:8080/loan/saveloan',loanData)
    .subscribe(response => {
      console.log('Loan saved', response)
      this.router.navigateByUrl('/loan')
    }, error =>{
      console.error("Error in loan save", error)
    }
    );


  }

}
