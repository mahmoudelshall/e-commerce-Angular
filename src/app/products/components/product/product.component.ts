import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() data!:Product;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;
  add(): void {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
