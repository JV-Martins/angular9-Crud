import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });
  }

  deleteProduct(){
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('product successfully deleted!')
      this.router.navigate(['/products'])
    })
  }
  cancel(){
    this.router.navigate(['/products'])
    this.productService.showMessage('Operation canceled!')
  }

}
