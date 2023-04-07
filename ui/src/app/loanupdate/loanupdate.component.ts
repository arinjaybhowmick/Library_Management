import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loanupdate',
  templateUrl: './loanupdate.component.html',
  styleUrls: ['./loanupdate.component.css']
})
export class LoanupdateComponent implements OnInit {

  loansForm : FormGroup

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe(params => {
      const loanId = Number(params.get('id'));
      this.getLoan(loanId)
    })

    this.loansForm = this.formbuilder.group({
      id : [,Validators.required],
      bookId : [,Validators.required],
      studentId : [,Validators.required],
      checkoutDate : ['',Validators.required],
      dueDate : ['',Validators.required],
      returnDate : []
    })

  }

  ngOnInit(): void {
  }

  getLoan(loanId : number){

    type Loan = { 
      id: number, bookId: number, studentId: number, 
      checkoutDate: String, dueDate: String, 
      returnDate: String };

    const url = 'http://localhost:8080/loan/loanbyid/' + loanId
    
    this.http.get(url)
    .subscribe(resp =>{
      const result: Loan = resp as Loan;
      console.log('Loan found successfully')
      this.loansForm.patchValue({
        id: result.id, bookId: result.bookId, studentId: result.studentId, 
        checkoutDate: result.checkoutDate, dueDate: result.dueDate, 
        returnDate: result.returnDate })
    }, error => {
      console.error('Error getting loan', error);
    });

  }

  updateLoan(){

    let loanData = this.loansForm.value;

    this.http.put('http://localhost:8080/loan/updateloan',loanData)
    .subscribe(response => {
      console.log('Loan updated', response)
      this.router.navigateByUrl('/loan')
    }, error =>{
      console.error("Error in loan update", error)
    }
    );

  }
}