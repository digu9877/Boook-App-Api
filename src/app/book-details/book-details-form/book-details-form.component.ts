import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';


@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.css']
})
export class BookDetailsFormComponent implements OnInit {

  constructor(public service:BookDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id == 0){
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    this.service.postBook().subscribe(res =>{

      this.resetForm(form);
      this.service.refreshList();
      alert("success");
    },
    err =>{console.log(err);})

  };


  updateRecord(form:NgForm){
    this.service.updateBook().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        alert("success");



      },
      err => {console.log(err);}
    );
  }





  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new BookDetail();
  }



}
