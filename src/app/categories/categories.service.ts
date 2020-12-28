import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  
  listCategories() {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }

    let body = new URLSearchParams();
    
    let url = 'http://localhost:3000/api/categories';
    return this.http.get(url,options);
  }

  addCategory(obj: any){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    let data:any = {
      name: obj.name,
      link: obj.link
    }
    let url = 'http://localhost:3000/api/categories';
    return this.http.post(url,data)
  }
}
