import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  }
  ,
  {
    path:"book",
    component:BookComponent
  }
  ,
  {
    path:"book-add",
    component:BookaddComponent
  }
  ,
  {
    path:"student",
    component:StudentComponent
  }
  ,
  {
    path:"author",
    component:AuthorComponent
  }
  ,
  {
    path:"publisher",
    component:PublisherComponent
  }
  ,
  {
    path:"loan",
    component:LoanComponent
  }
  ,
  {
    path:"admin",
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
