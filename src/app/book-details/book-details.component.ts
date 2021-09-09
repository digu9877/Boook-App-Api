import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../shared/book-detail.model';
import { BookDetailService } from '../shared/book-detail.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(public service:BookDetailService) { }


  ngOnInit(): void {
    this.service.refreshList();
  }

 // populateForm(selectedRecord:BookDetail){
   // this.service.formData=selectedRecord;
    //console.log(this.populateForm);

  //}
  populateForm(selectedRecord: BookDetail){
    this.service.formData = Object.assign({}, selectedRecord);
      }

      onDelete(id:number){
          if(confirm('are you sure ?'))
          {
        this.service. Delete(id).subscribe(
          res => {
            this.service.refreshList();
            alert("success")

          },
          err => {console.log(err);}
        );
      }
    }


}
