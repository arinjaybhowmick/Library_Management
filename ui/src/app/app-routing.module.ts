import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { AuthoraddComponent } from './authoradd/authoradd.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { PublisheraddComponent } from './publisheradd/publisheradd.component';
import { PublisherupdateComponent } from './publisherupdate/publisherupdate.component';
import { LoanaddComponent } from './loanadd/loanadd.component';
import { LoanupdateComponent } from './loanupdate/loanupdate.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';

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
  },
  {
    path:"book-update/:id",
    component:BookupdateComponent
  }
  ,
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"student-add",
    component:StudentaddComponent
  },
  {
    path:"student-update/:id",
    component:StudentupdateComponent
  }
  ,
  {
    path:"author",
    component:AuthorComponent
  },
  {
    path:"author-add",
    component:AuthoraddComponent
  },
  {
    path:"author-update/:id",
    component:AuthorupdateComponent
  }
  ,
  {
    path:"publisher",
    component:PublisherComponent
  },
  {
    path:"publisher-add",
    component:PublisheraddComponent
  },
  {
    path:"publisher-update/:id",
    component:PublisherupdateComponent
  }
  ,
  {
    path:"loan",
    component:LoanComponent
  },
  {
    path:"loan-add",
    component:LoanaddComponent
  },
  {
    path:"loan-update/:id",
    component:LoanupdateComponent
  }
  ,
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"admin-add",
    component:AdminaddComponent
  },
  {
    path:"admin-update/:id",
    component:AdminupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
