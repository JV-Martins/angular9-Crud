import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id','name','price','action']

  constructor(private ProductService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
