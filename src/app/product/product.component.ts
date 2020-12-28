import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,ParamMap} from '@angular/router'

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  api_url: string = 'http://localhost:3000/api/products';
  products
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.api_url).subscribe((kq: any) => {
      this.products = kq
    })
  }

}
