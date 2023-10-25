import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
