import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  title="Loans";
  loans : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchLoans()
    this.countLoans()
  }

  addLoans(){
    console.log("add loans button clicked")
    this.router.navigateByUrl('/loan-add')
  }

  
  updateLoan(loanId : number){
    console.log("update loan button clicked ")
    this.router.navigate(['/loan-update',loanId])
  }

  fetchLoans(){

    this.http.get("http://localhost:8080/loan/allloans")
    .subscribe(resp =>{
      this.loans = resp;
      console.log('Loans retrieved successfully', this.loans)
    }, error => {
      console.error('Error retrieving loans', error);
    });

  }

  countLoans(){

    this.http.get("http://localhost:8080/loan/loancount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Loans count successfully', this.count)
    }, error => {
      console.error('Error count loans', error);
    });

  }

  deleteLoan(loanId : number){
    console.log(loanId)
    const url = 'http://localhost:8080/loan/deleteloan/' + loanId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Loan deleted successfully');
      this.fetchLoans()
      this.countLoans()
    }, error => {
      console.error('Error deleting loan', error);
    });
  }
}
