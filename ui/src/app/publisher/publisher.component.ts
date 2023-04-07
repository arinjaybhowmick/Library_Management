import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  title="Publishers";
  publishers : any = [];
  count : any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchPublishers()
    this.countPublishers()
  }

  addPublishers(){
    console.log("add publishers button clicked")
    this.router.navigateByUrl('/publisher-add')
  }

  
  updatePublisher(publisherId : number){
    console.log("update publisher button clicked ")
    this.router.navigate(['/publisher-update',publisherId])
  }

  fetchPublishers(){

    this.http.get("http://localhost:8080/publisher/allpublishers")
    .subscribe(resp =>{
      this.publishers = resp;
      console.log('Publishers retrieved successfully', this.publishers)
    }, error => {
      console.error('Error retrieving publishers', error);
    });

  }

  countPublishers(){

    this.http.get("http://localhost:8080/publisher/publishercount")
    .subscribe(resp =>{
      this.count = resp;
      console.log('Publishers count successfully', this.count)
    }, error => {
      console.error('Error count publishers', error);
    });

  }

  deletePublisher(publisherId : number){
    console.log(publisherId)
    const url = 'http://localhost:8080/publisher/deletepublisher/' + publisherId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Publisher deleted successfully');
      this.fetchPublishers()
      this.countPublishers()
    }, error => {
      console.error('Error deleting publisher', error);
    });
  }
}