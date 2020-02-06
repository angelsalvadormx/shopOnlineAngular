import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  public products: Array<Product> = []; 
  public productsToShow: Array<Product> = [];
  constructor() { }

  ngOnInit() {
    this.productsToShow = this.products;
    const p1 = new Product();
    p1.name = 'Chocolate';
    p1.price = 3;
    p1.type = 'food';
    this.products.push(p1);

    const p2 = new Product();
    p2.name = 'Laptop';
    p2.price= 100;
    p2.type = 'electronics';
    this.products.push(p2);

    const p3 = new Product();
    p3.name = 'Suit';
    p3.price= 50;
    p3.type = 'clother';
    this.products.push(p3);
  }
  public filterProducts(filtro): void{
    if(filtro == 'all'){
      this.productsToShow = this.products;
      return;
    }
    this.productsToShow = this.products.filter(product => product.type === filtro)    
  }
}
