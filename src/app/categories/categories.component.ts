import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,ParamMap} from '@angular/router'

//import {HttpClient} from '@angular/common/http'

import {CategoriesService} from './categories.service';

import { FormControl } from '@angular/forms';

import { FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: ActivatedRoute, private categoryService: CategoriesService) { }
  //api_url: string = 'http://localhost:3000/api/userlist'
  title;
  users;
  categories;
  data:any = {
    name: 'Minh'
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((param:ParamMap) => {
      this.title = param.get('id');
    })
    //this.http.get(this.api_url).subscribe((kq: any) => {
      //this.users = kq
    //})
    //this.categories = this.categoryService.addUser()
    //console.log(this.categories)
    this.categoryService.listCategories().subscribe((kq: any) => {
      this.categories = kq
    })
  }
  onSubmit(name,link){
    let obj = {
      name: name.value,
      link: link.value
    }
    console.log(obj)
    this.categoryService.addCategory(obj).subscribe((kq: any) => {
      alert(kq)
    })
    return false
  }

}
