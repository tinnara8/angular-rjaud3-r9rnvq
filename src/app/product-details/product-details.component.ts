import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    console.log('-*-routeParams', routeParams);
    console.log('-*-productIdFromRoute', productIdFromRoute);

    // Find the product that correspond with the id provided in route.
    console.log('-*-products', products);
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    console.log('-*-product', this.product);
  }
}
