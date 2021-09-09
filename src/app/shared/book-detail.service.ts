import { Injectable } from '@angular/core';
import { BookDetail } from './book-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  constructor(private http:HttpClient) { }

  formData:BookDetail = new BookDetail();
  readonly baseURL = 'https://localhost:44394/api/Books'
  list: BookDetail[] = [];

  postBook(){
    return this.http.post(this.baseURL,this.formData);
  }

  updateBook(){
    return this.http.put(`${this.baseURL}?id=${this.formData.id}`,this.formData);
  }
  Delete(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }



  refreshList() {

    return this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as BookDetail[]);
  }



}
