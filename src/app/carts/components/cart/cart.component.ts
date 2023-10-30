import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any = [];
  total: number = 0;
  seccess: boolean = false;

  constructor(private cartsService: CartsService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartProducts);
    }
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  plusAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));

  }
  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCartTotal()
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal()

  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }


  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  buy() {
    let products = this.cartProducts.map((item: any) => {
      return { productId: item.item.id, quantity: item.quantity };
    })
    let model = {
      userId: 5,
      date: new Date(),
      products
    }

    this.cartsService.newCart(model).subscribe({
      next: (res: any) => {
        this.seccess = true;
        this.cartProducts = [];
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));


      },
      error: (err: any) => {
        alert(err.message);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
