import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
