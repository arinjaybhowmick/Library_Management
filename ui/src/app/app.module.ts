import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { PublisherComponent } from './publisher/publisher.component';
import { LoanComponent } from './loan/loan.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { AuthoraddComponent } from './authoradd/authoradd.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { PublisheraddComponent } from './publisheradd/publisheradd.component';
import { PublisherupdateComponent } from './publisherupdate/publisherupdate.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { LoanaddComponent } from './loanadd/loanadd.component';
import { LoanupdateComponent } from './loanupdate/loanupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    StudentComponent,
    AdminComponent,
    PublisherComponent,
    LoanComponent,
    AuthorComponent,
    HomeComponent,
    MenuComponent,
    BookaddComponent,
    BookupdateComponent,
    AdminaddComponent,
    AdminupdateComponent,
    AuthoraddComponent,
    AuthorupdateComponent,
    PublisheraddComponent,
    PublisherupdateComponent,
    StudentaddComponent,
    StudentupdateComponent,
    LoanaddComponent,
    LoanupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
